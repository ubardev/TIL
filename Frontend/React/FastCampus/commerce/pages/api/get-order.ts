import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { OrderItem, PrismaClient } from "@prisma/client";
import { authOptions } from "./auth/[...nextauth]";

const prisma = new PrismaClient();

async function getOrder(userId: string) {
  try {
    // orders 테이블에서 나의 주문들을 조회한다.
    const orders = await prisma.orders.findMany({
      where: {
        userId,
      },
    });

    console.log("orders ==========>", orders);

    let response = [];
    // orders 안에 있는 orderItemIds로 orderItem을 꺼내고 products 테이블에서 이미지 등 정보를 조합한다.
    for (const order of orders) {
      let orderItems: OrderItem[] = [];

      for (const id of order.orderItemIds
        .split(",")
        .map((item) => Number(item))) {
        const result: OrderItem[] = await prisma.$queryRaw`
            SELECT i.id, quantity, amount, i.price, name, image_url, productId 
            FROM OrderItem as i 
            INNER JOIN products as p ON i.productId=p.id 
            WHERE i.id=${id}
          `;
        orderItems.push.apply(orderItems, result);
      }

      response.push({ ...order, orderItems });
    }

    return response;
  } catch (error) {
    console.error(error);
  }
}

type Data = {
  items?: any;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const session = await getServerSession(req, res, authOptions);

  if (session === null) {
    res.status(200).json({ items: [], message: "no Session" });
    return;
  }

  try {
    const cart = await getOrder(String(session.id));
    res.status(200).json({ items: cart, message: "Success" });
  } catch (error) {
    res.status(400).json({ message: "Failed" });
  }
}

import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "./auth/[...nextauth]";

const prisma = new PrismaClient();

async function getCart(userId: string) {
  try {
    const cart = await prisma.$queryRaw`
      SELECT cart.id, userId, quantity, amount, price, name, image_url
      FROM Cart AS cart
      INNER JOIN products AS products ON cart.productId = products.id
      WHERE cart.userid = ${userId}
    `;

    console.log("cart ==========>", cart);

    return cart;
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
    const cart = await getCart(String(session.id));
    res.status(200).json({ items: cart, message: "Success" });
  } catch (error) {
    res.status(400).json({ message: "Failed" });
  }
}

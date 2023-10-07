import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getProductsCount(category?: number) {
  const where =
    category && category !== -1
      ? {
          where: {
            category_id: category,
          },
        }
      : undefined;

  try {
    const response = await prisma.products.count(where);

    return response;
  } catch (error) {
    console.error(error);
  }
}

type Data = {
  item?: any;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { category } = req.query;

  try {
    const productsCount = await getProductsCount(Number(category));
    res.status(200).json({ item: productsCount, message: "Success" });
  } catch (error) {
    res.status(400).json({ message: "Failed" });
  }
}

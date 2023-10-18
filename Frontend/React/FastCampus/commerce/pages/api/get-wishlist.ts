import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "./auth/[...nextauth]";

const prisma = new PrismaClient();

async function getWishlist(userId: string) {
  try {
    const response = await prisma.wishlist.findUnique({
      where: {
        userId,
      },
    });

    return response?.productIds.split(",");
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
    const wishlist = await getWishlist(String(session.id));
  } catch (error) {
    res.status(400).json({ message: "Failed" });
  }
}

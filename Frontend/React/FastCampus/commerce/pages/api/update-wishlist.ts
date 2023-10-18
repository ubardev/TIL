import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "./auth/[...nextauth]";

const prisma = new PrismaClient();

async function updateWishlist(userId: string, productId: string) {
  try {
    // 원래 DB에 담겨있던 wishlist 조회
    const wishlist = await prisma.wishlist.findUnique({
      where: {
        userId: userId,
      },
    });

    // 조회한 wishlist 배열로 변환, 조회된 값이 없으면 빈 배열 생성
    const originWishlist =
      wishlist?.productIds != null && wishlist.productIds !== ""
        ? wishlist.productIds.split(",")
        : [];

    // 이미 저장되어 있던 wishlist에 값이 있이면 찜하기 했던 상태임
    const isWished = originWishlist.includes(productId);

    // 이미 찜하기 상태면 제거 찜하기 상태 아니면 배열에 추가
    const newWishlist = isWished
      ? originWishlist.filter((id) => id !== productId)
      : [...originWishlist, productId];

    const response = await prisma.wishlist.upsert({
      where: {
        userId,
      },
      update: {
        productIds: newWishlist.join(","),
      },
      create: {
        userId,
        productIds: newWishlist.join(","),
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
  const { productId } = JSON.parse(req.body);
  if (session == null) {
    res.status(200).json({ items: [], message: "no Session" });
    return;
  }
  try {
    const wishlist = await updateWishlist(
      String(session.id),
      String(productId)
    );
    res.status(200).json({ items: wishlist, message: "Success" });
  } catch (error) {
    res.status(400).json({ message: "Failed" });
  }
}

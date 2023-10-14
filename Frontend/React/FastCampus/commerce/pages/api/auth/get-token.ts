import type { NextApiRequest, NextApiResponse } from "next";
import jwtDecode from "jwt-decode";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getToken(credential: string) {
  const decoded = jwtDecode(credential);

  try {
    // const response = await prisma.products.count({ where });
    console.log("decoded ==========>", decoded);
    return decoded;
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
  const { credential } = req.query;

  try {
    const token = await getToken(String(credential));

    res.status(200).json({ items: token, message: "Success" });
  } catch (error) {
    res.status(400).json({ message: "Failed" });
  }
}

import type { NextApiRequest, NextApiResponse } from "next";
import {Client} from '@notionhq/client';

const notion = new Client({
  auth: "secret_8vU5VK2V7ra0qjKNjQpy0z63wPKcuDcfkRfs02XAI4F",
});

const databaseId = "0e4ceac40242415e9f2bc0c566df66a0";

async function getItems() {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: "price",
          direction: "ascending",
        },
      ],
    });

    return response;
  } catch (error) {
    console.error(JSON.stringify(error));
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
  try {
    const response = await getItems();
    res.status(200).json({ items: response?.results, message: "Success" });
  } catch (error) {
    res.status(400).json({ message: "Failed" });
  }
}

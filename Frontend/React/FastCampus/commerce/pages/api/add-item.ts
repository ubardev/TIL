import type { NextApiRequest, NextApiResponse } from "next";
import {Client} from '@notionhq/client';

const notion = new Client({
  auth: "secret_8vU5VK2V7ra0qjKNjQpy0z63wPKcuDcfkRfs02XAI4F",
});

const databaseId = "0e4ceac40242415e9f2bc0c566df66a0";

async function addItem(name: string) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: [
          {
            text: {
              content: name,
            },
          },
        ],
      },
    });

    console.log("response ==========>", response);
  } catch (error) {
    console.error(JSON.stringify(error));
  }
}

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name } = req.query;

  if (name === null) {
    return res.status(400).json({ message: "No name" });
  }

  try {
    await addItem(String(name));
    res.status(200).json({ message: `Success ${name} added` });
  } catch (error) {
    res.status(400).json({ message: `Failed ${name} added` });
  }
}

import type { NextApiRequest, NextApiResponse } from "next";
import {Client} from '@notionhq/client';

const notion = new Client({
  auth: "secret_8vU5VK2V7ra0qjKNjQpy0z63wPKcuDcfkRfs02XAI4F",
});

const databaseId = "0e4ceac40242415e9f2bc0c566df66a0";

async function getDetail(pageId: string, propertyId: string) {
  try {
    const response = await notion.pages.properties.retrieve({
      page_id: pageId,
      property_id: propertyId,
    });

    return response;
  } catch (error) {
    console.error(JSON.stringify(error));
  }
}

type Data = {
  detail?: any;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { pageId, propertyId } = req.query;
    const response = await getDetail(String(pageId), String(propertyId));
    res.status(200).json({ detail: response, message: "Success" });
  } catch (error) {
    res.status(400).json({ message: "Failed" });
  }
}

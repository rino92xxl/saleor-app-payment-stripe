import { createAppRegisterHandler } from "@saleor/app-sdk/handlers/next";
import { type NextApiRequest, type NextApiResponse } from "next";

import { saleorApp } from "../../saleor-app";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Received request:", req.method, req.url);
  console.log("Request headers:", req.headers);
  console.log("Request body:", req.body);

  try {
    const registerHandler = createAppRegisterHandler({
      apl: saleorApp.apl,
      allowedSaleorUrls: ["https://ed.saleor.cloud/graphql/"],
    });

    await registerHandler(req, res);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
}

import { getShopDetails_GQL_Response } from "@/types";
import { getShopDetailsQuery } from "./queries";

export const getShopDetails =
  async (): Promise<getShopDetails_GQL_Response> => {
    const res = await fetch(process.env.GRAPHQL_API_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": process.env.ADMIN_API_ACCESS_TOKEN!,
      },
      body: JSON.stringify({
        query: getShopDetailsQuery,
      }),
    });

    if (!res.ok) {
      const text = await res.text(); // get the response body for more information

      throw new Error(`
      Failed to fetch data
      Status: ${res.status}
      Response: ${text}
    `);
    }

    return res.json();
  };

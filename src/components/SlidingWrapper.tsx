import { getProductsQuery } from "@/getQueries/queries";
import { getAllProducts_GQL_Response } from "@/types";
import React from "react";
import SlidingImages from "./SlidingImages";

const getAllProducts = async (): Promise<getAllProducts_GQL_Response> => {
  const res = await fetch(process.env.GRAPHQL_API_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": process.env.ADMIN_API_ACCESS_TOKEN!,
    },
    body: JSON.stringify({
      query: getProductsQuery,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`
    Failed to fetch data
    Status Code: ${res.status}
    Response: ${text}`);
  }

  return res.json();
};

const SlidingWrapper = async () => {
  const { data } = await getAllProducts();
  return <SlidingImages data={data} />;
};

export default SlidingWrapper;

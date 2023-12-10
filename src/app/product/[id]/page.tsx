import { getProductQuery } from "@/queries/get";
import { SingleProductPageProps, getProduct_GQL_Response } from "@/types";
import React from "react";

const getProduct = async (id: string): Promise<getProduct_GQL_Response> => {
  const res = await fetch(process.env.GRAPHQL_API_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": process.env.ADMIN_API_ACCESS_TOKEN!,
    },
    body: JSON.stringify({
      query: getProductQuery,
      variables: {
        id: `gid://shopify/Product/${id}`,
      },
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

const SinglularProduct = async ({ params }: SingleProductPageProps) => {
  const product = await getProduct(params.id);
  return (
    <div>
      SinglularProduct - {params.id} + {product.data.product.handle ?? "handle"}
    </div>
  );
};

export default SinglularProduct;

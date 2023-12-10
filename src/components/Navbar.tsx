import { getShopDetailsQuery } from "@/queries/get";
import { getShopDetails_GQL_Response } from "@/types";
import Link from "next/link";

const getShopDetails = async (): Promise<getShopDetails_GQL_Response> => {
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

const Navbar = async () => {
  const json = await getShopDetails();

  return (
    <nav className="mt-10">
      <h1 className="font-bold mb-3 text-3xl text-center">
        {json.data.shop.name}
      </h1>

      <ul className="text-center">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

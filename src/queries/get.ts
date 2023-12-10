import { gql } from "@/utils/gql";

export const getProductsQuery = gql`
  query getProducts {
    products(first: 6) {
      nodes {
        description
        featuredImage {
          altText
          height
          id
          url
          width
        }
        handle
        id
        priceRangeV2 {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        tags
        title
      }
    }
  }
`;

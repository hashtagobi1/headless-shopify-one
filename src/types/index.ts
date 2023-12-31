import { ReactNode } from "react";

export type getProducts_GQL_Response = {
  data: {
    products: {
      nodes: ShopifyProduct[];
    };
    extensions: ShopifyExtension;
  };
};
export type getAllProducts_GQL_Response = {
  data: {
    products: {
      nodes: ShopifyProduct[];
    };
    extensions: ShopifyExtension;
  };
};

export type getProduct_GQL_Response = {
  data: {
    product: ShopifyProduct;
  };
  extensions: ShopifyExtension;
};

export type getShopDetails_GQL_Response = {
  data: {
    shop: {
      name: string;
    };
  };
  extensions: ShopifyExtension;
};

export type ShopifyExtension = {
  cost: {
    actualQueryCost: number;
    requestedQueryCost: number;
    throttleStatus: {
      currentlyAvailable: number;
      maximumAvailable: number;
      restoreRate: number;
    };
  };
};

export type ShopifyProduct = {
  description: string;
  featuredImage: {
    altText: string;
    height: number;
    id: string;
    url: string;
    width: number;
  };
  handle: string;
  id: string;
  priceRangeV2: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  tags: string[];
  title: string;
};

export type SingleProductPageProps = {
  params: {
    id: string;
  };
};
export type MagneticButtonProps = { children: ReactNode };
export type RootLayoutProps = { children: ReactNode };

export interface RoundedProps {
  children?: ReactNode;
  backgroundColor?: string;
  [x: string]: any;
  active?: boolean;
}

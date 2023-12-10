type GraphQLResponse = {
  data: {
    products: {
      nodes: {
        title: string;
      }[];
    };
  };
  extensions: {
    cost: {
      requestedQueryCost: number;
      actualQueryCost: number;
      throttleStatus: {
        maximumAvailable: number;
        currentlyAvailable: number;
        restoreRate: number;
      };
    };
  };
};

const getProducts = async () => {};

const HomePage = () => {
  return (
    <div>
      <h1>Shopify + Next.js 13!</h1>
    </div>
  );
};

export default HomePage;

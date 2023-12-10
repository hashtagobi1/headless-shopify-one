export const formatPrice = (price: string) =>
  Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
  }).format(parseInt(price, 10));

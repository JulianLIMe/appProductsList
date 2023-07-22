export const formatCurrency = (price: number) => {
  const formatPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formatPrice.format(price);
};

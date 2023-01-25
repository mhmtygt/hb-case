export const sortedPrice = (prices) => {
  return prices.sort(function (prev, next) {
    return prev - next;
  });
};

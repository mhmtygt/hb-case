import { get } from "lodash";

export const findSortedProduct = (filteredData, sortedPrices, key) => {
  let sortedProduct = [];
  sortedPrices.forEach((price) => {
    filteredData.forEach((product) => {
      if (get(product, "newPrice") === price) sortedProduct.push(product);
    });
  });
  if (key === "lp") return sortedProduct;
  else if (key === "hp") return sortedProduct.reverse();
};

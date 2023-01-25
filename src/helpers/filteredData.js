import { get, isEmpty } from "lodash";

export const filteredData = (products, brand, color) => {
  let filteredData = [];
  if (products) {
    if (brand !== null) {
      products.forEach((product) => {
        if (get(product, "brand") === brand) {
          filteredData.push(product);
        }
      });
    } else if (color !== null) {
      products.forEach((product) => {
        if (get(product, "color") === color) {
          filteredData.push(product);
        }
      });
    }
  }
  return !isEmpty(filteredData) ? filteredData : products;
};

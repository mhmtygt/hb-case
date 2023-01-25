import { isEmpty, get } from "lodash";

export const findPropertiesOfProducts = (products, key) => {
  let uniqueValues = [];
  if (!isEmpty(products)) {
    products.map((product) => {
      let objectValue = get(product, key);
      if (!uniqueValues.includes(objectValue)) {
        return uniqueValues.push(objectValue);
      } else return [];
    });
  }

  return uniqueValues;
};

export const findProductCountSameProp = (products, uniqueValues, key) => {
  let uniqueValuesWithCount = [];
  let count = 0;
  uniqueValues.forEach((uniqueValue) => {
    products.forEach((product) => {
      let objectValue = get(product, key);
      if (uniqueValue === objectValue) {
        count++;
      }
    });
    uniqueValuesWithCount.push({ name: uniqueValue, count: count });
    count = 0;
  });
  return uniqueValuesWithCount;
};

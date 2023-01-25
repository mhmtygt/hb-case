import { findIndex, isEmpty } from "lodash";

export const findInBasket = (basket, item) => {
  let array = [];
  if (!isEmpty(basket)) {
    if (
      findIndex(basket, (data) => {
        return data.id === item.id;
      }) === -1
    )
      array = [...basket, item];
  } else {
    array.push(item);
  }
  return array;
};

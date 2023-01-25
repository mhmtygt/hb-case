import blackProduct from "../assets/blackProduct.svg";
import redProduct from "../assets/redProduct.svg";
import yellowProduct from "../assets/yellowProduct.svg";

export const selectProductImage = (color) => {
  if (color === "Red") return redProduct;
  else if (color === "Black") return blackProduct;
  else if (color === "Yellow") return yellowProduct;
};

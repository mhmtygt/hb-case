import { useEffect } from "react";
import { useSelector } from "react-redux";
import "../App.css";
import { BasketProductItem } from "../components/BasketProductItem";

export const Basket = () => {
  const dataState = useSelector((state) => state.dataState);
  useEffect(() => {}, [dataState.basketData]);
  return (
    <div className="dropdown">
      <button className="dropbtn">Sepetim</button>
      <div className="dropdown-content">
        {dataState.basketData !== null &&
          dataState.basketData.map((data, key) => {
            return (
              <div className="item" key={key}>
                <BasketProductItem item={data} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBasketData } from "../redux/slices/dataSlice";
import { findInBasket } from "../helpers/findInBasket";
import { findIndex, isEmpty } from "lodash";
import { selectProductImage } from "../helpers/selectProductImage";

export const ProductItem = ({ item }) => {
  const dispatch = useDispatch();
  const dataState = useSelector((state) => state.dataState);
  const [isShown, setIsShown] = useState(false);
  const [isAvaliableInBasket, setIsAvaliableInBasket] = useState(false);

  const handleMouseEnter = (e) => {
    setIsShown(true);
  };
  const handleMouseLeave = (e) => {
    setIsShown(false);
  };
  useEffect(() => {
    if (!isEmpty(dataState.basketData)) {
      if (
        findIndex(dataState.basketData, (data) => {
          return data.id === item.id;
        }) === -1
      )
        setIsAvaliableInBasket(false);
    } else {
      setIsAvaliableInBasket(false);
    }
  }, [dataState.basketData]);

  const handleBasketClick = () => {
    dispatch(setBasketData(findInBasket(dataState.basketData, item)));
    setIsAvaliableInBasket(true);
  };

  return (
    <div
      className="product"
      style={{
        width: 300,
        padding: "10px",
      }}
      onMouseLeave={handleMouseLeave}
    >
      {isShown ? (
        <div onMouseLeave={handleMouseLeave}>
          <br />
          <img src={selectProductImage(item.color)} alt={item.color} />
          <p>{item.title}</p>

          {isAvaliableInBasket ? (
            <p>Bu ürünü sepete ekleyemezsiniz</p>
          ) : (
            <button onClick={handleBasketClick}>Sepete Ekle</button>
          )}
        </div>
      ) : (
        <div onMouseEnter={handleMouseEnter}>
          <img src={selectProductImage(item.color)} alt={item.color} />
          <br />
          <p>{item.title}</p>
          <p>Marka: {item.brand}</p>
          <p>Renk: {item.color}</p>
          <p>{item.newPrice}</p>
          <p>
            {item.oldPrice} <span>{item.rate}</span>
          </p>
        </div>
      )}
    </div>
  );
};

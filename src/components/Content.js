import { useSelector } from "react-redux";
import { Filter } from "../components/Filter";
import { ProductList } from "../components/ProdcuctList";
import { Popup } from "./Popup";

export const Content = () => {
  const dataState = useSelector((state) => state.dataState);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "20vh auto",
      }}
    >
      <Filter />
      <ProductList />
      {dataState.openPopup ? (
        <Popup overlayDisplay={"block"} popupDisplay={"block"} />
      ) : (
        <Popup overlayDisplay={"none"} popupDisplay={"none"} />
      )}
    </div>
  );
};

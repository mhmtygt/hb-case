import { useDispatch } from "react-redux";
import { selectProductImage } from "../helpers/selectProductImage";
import {
  setOpenPopup,
  setProductIdToBeRemoved,
} from "../redux/slices/dataSlice";

export const BasketProductItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(setProductIdToBeRemoved(item.id));
    dispatch(setOpenPopup(true));
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img
        style={{ width: 30, height: 30 }}
        src={selectProductImage(item.color)}
        alt={item.color}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <p style={{ fontSize: 12 }}>{item.title}</p>
        <div>Telefon</div>
        <button onClick={handleRemoveItem}>Kaldır</button>
      </div>
    </div>
  );
};

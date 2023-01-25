import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { setOpenPopup, setBasketData } from "../redux/slices/dataSlice";
import { findIndex } from "lodash";

export const Popup = ({ overlayDisplay, popupDisplay }) => {
  const dispatch = useDispatch();
  const dataState = useSelector((state) => state.dataState);

  const handleClick = (e) => {
    if (e.target.name === "no") {
      dispatch(setOpenPopup(false));
    } else {
      let index = findIndex(dataState.basketData, (data) => {
        return data.id === dataState.productIdtoBeRemoved;
      });
      let copyBasketData = dataState.basketData.slice();
      copyBasketData.splice(index, 1);
      dispatch(setBasketData(copyBasketData));
      dispatch(setOpenPopup(false));
    }
  };
  return (
    <div>
      <div id="overlay" style={{ display: overlayDisplay }}></div>
      <div id="popup" style={{ display: popupDisplay }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            padding: 5,
          }}
        >
          <div> Ürünü silmek istediğinize emin misiniz?</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              padding: 10,
            }}
          >
            <button name="yes" onClick={handleClick}>
              Evet
            </button>
            <button name="no" onClick={handleClick}>
              Hayır
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

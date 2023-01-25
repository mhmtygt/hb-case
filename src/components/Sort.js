import { useDispatch, useSelector } from "react-redux";
import {
  setSortName,
  setActiveFilter,
  setFilteredData,
} from "../redux/slices/dataSlice";
import { findSortedProduct } from "../helpers/findSortedProduct";

export const Sort = () => {
  const dispatch = useDispatch();
  const dataState = useSelector((state) => state.dataState);
  const handleOption = (e) => {
    if (e.target.value !== "default") {
      dispatch(setSortName(e.target.value));
      dispatch(setActiveFilter(true));
      dispatch(
        setFilteredData(
          findSortedProduct(
            dataState.filteredData,
            dataState.sortedPrices,
            e.target.value
          )
        )
      );
    }
  };
  return (
    <select
      style={{ width: "120px", height: "48px" }}
      defaultValue="default"
      value={dataState.sortName !== null ? dataState.sortName : "default"}
      onSelect={handleOption}
      onChange={handleOption}
    >
      <option value="default" disabled>
        Sıralama
      </option>
      <option value="lp">En Düşük Fiyat</option>
      <option value="hp">En Yüksek Fiyat</option>
      {/* TODO */}
      {/* <option value="nao">En Yeniler (A{">"}Z)</option>
      <option value="nrao">En Yeniler (Z{">"}A)</option> */}
    </select>
  );
};

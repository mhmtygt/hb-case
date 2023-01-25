import { ProductItem } from "../components/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { filteredData } from "../helpers/filteredData";
import { setFilteredData } from "../redux/slices/dataSlice";

export const ProductList = () => {
  const dispatch = useDispatch();
  const dataState = useSelector((state) => state.dataState);
  const [paginatedData, setPaginatedData] = useState([]);
  const [buttonKeys, setButtonKeys] = useState(null);

  useEffect(() => {
    if (!dataState.isActiveFilter)
      dispatch(setFilteredData(filteredData(dataState.data, null, null)));
    if (dataState.filteredData) {
      let datass = dataState.filteredData.slice(0, 12);
      setPaginatedData(datass);
      setButtonKeys(findButtonKeys());
    }
  }, [dataState.filteredData, dataState.data]);

  const handlePagination = (e) => {
    let datass = dataState.filteredData.slice(
      (e.target.innerText - 1) * 12,
      (e.target.innerText - 1) * 12 + 12
    );
    setPaginatedData(datass);
  };

  const findButtonKeys = () => {
    let buttons = [];
    dataState.filteredData.map((data, index) => {
      if (index % 12 === 0) {
        return buttons.push(index);
      }
    });
    return buttons;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
        overflow: "scroll",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          padding: "0px 0px 0px 200px",
        }}
      >
        {paginatedData?.map((item) => {
          return <ProductItem key={item.id} item={item} />;
        })}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "20px",
          alignSelf: "center",
        }}
      >
        {buttonKeys &&
          buttonKeys.map((data, index) => {
            return (
              <button
                key={index}
                style={{ padding: "10px", marginLeft: "10px" }}
                onClick={handlePagination}
              >
                {index + 1}
              </button>
            );
          })}
      </div>
    </div>
  );
};

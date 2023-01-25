import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import {
  findPropertiesOfProducts,
  findProductCountSameProp,
} from "../helpers/findColorsOfProduct";
import { findSortedProduct } from "../helpers/findSortedProduct";
import { sortedPrice } from "../helpers/sortPrice";

import { filteredData } from "../helpers/filteredData";
import {
  setFilteredData,
  setActiveFilter,
  setSortedPrices,
  setSortName,
} from "../redux/slices/dataSlice";
import { isEmpty } from "lodash";

export const Filter = () => {
  const dispatch = useDispatch();
  const dataState = useSelector((state) => state.dataState);
  const [uniqueBrands, setBrands] = useState([]);
  const [uniqueColors, setColors] = useState([]);
  const [uniquePrices, setPrices] = useState([]);

  const [brandFilter, setBrandFilter] = useState(null);
  const [colorFilter, setColorFilter] = useState(null);

  useEffect(() => {
    setBrands(
      findProductCountSameProp(
        dataState.data,
        findPropertiesOfProducts(dataState.data, "brand"),
        "brand"
      )
    );
    setColors(
      findProductCountSameProp(
        dataState.data,
        findPropertiesOfProducts(dataState.data, "color"),
        "color"
      )
    );
    setPrices(
      findProductCountSameProp(
        dataState.data,
        findPropertiesOfProducts(dataState.data, "newPrice"),
        "newPrice"
      )
    );
  }, [dataState.data]);

  useEffect(() => {
    if (isEmpty(dataState.sortedPrices) && !isEmpty(uniquePrices)) {
      let prices = [];
      uniquePrices.forEach((price) => {
        prices.push(price.name);
      });
      dispatch(setSortedPrices(sortedPrice(prices)));
    }
  }, [uniquePrices]);

  useEffect(() => {
    if (dataState.data) {
      dispatch(
        setFilteredData(filteredData(dataState.data, brandFilter, colorFilter))
      );
    }
  }, [brandFilter, colorFilter]);

  const handleBrandFilter = (e) => {
    if (!dataState.isActiveFilter) {
      dispatch(setActiveFilter(true));
    }
    setBrandFilter(e.target.name);
    setColorFilter(null);
    dispatch(setSortName(null));
  };

  const handleColorFilter = (e) => {
    if (!dataState.isActiveFilter) {
      dispatch(setActiveFilter(true));
    }
    setColorFilter(e.target.name);
    setBrandFilter(null);
    dispatch(setSortName(null));
  };

  const handleResetFilter = () => {
    if (dataState.isActiveFilter) {
      dispatch(setActiveFilter(false));
      setBrandFilter(null);
      setColorFilter(null);
      dispatch(setSortName(null));
      dispatch(setFilteredData(filteredData(dataState.data, null, null)));
    }
  };

  const handleSortFilter = (e) => {
    dispatch(setActiveFilter(true));
    dispatch(setSortName(e.target.name));
    dispatch(
      setFilteredData(
        findSortedProduct(
          dataState.filteredData,
          dataState.sortedPrices,
          e.target.name
        )
      )
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button className="block" onClick={handleResetFilter}>
        Reset Filter
      </button>
      <p>Marka</p>
      {uniqueBrands.map((brand, key) => {
        for (let i = 0; i < brand.count; i++) {
          return (
            <button
              key={key}
              className="block"
              name={brand.name}
              onClick={handleBrandFilter}
            >
              {brand.name} ({brand.count})
            </button>
          );
        }
      })}
      <p>Sıralama</p>
      <button className="block" name="lp" onClick={handleSortFilter}>
        En Düşük Fiyat
      </button>
      <button className="block" name="hp" onClick={handleSortFilter}>
        En Yüksek Fiyat
      </button>
      {/* TODO */}
      {/* <button className="block" name="nao" onClick={handleColorFilter}>
        En Yeniler (A{">"}Z)
      </button>
      <button className="block" name="nrao" onClick={handleColorFilter}>
        En Yeniler (Z{">"}A)
      </button> */}
      <p>Renk</p>
      {uniqueColors.map((color, key) => {
        for (let i = 0; i < color.count; i++) {
          return (
            <button
              key={key}
              className="block"
              name={color.name}
              onClick={handleColorFilter}
            >
              {color.name} ({color.count})
            </button>
          );
        }
      })}
    </div>
  );
};

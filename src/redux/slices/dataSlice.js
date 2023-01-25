import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  filteredData: null,
  isActiveFilter: false,
  basketData: null,
  openPopup: false,
  productIdtoBeRemoved: null,
  sortedPrices: null,
  sortName: null,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      localStorage.setItem("productData", JSON.stringify(state.data));
    },
    setFilteredData: (state, action) => {
      state.filteredData = action.payload;
    },
    setActiveFilter: (state, action) => {
      state.isActiveFilter = action.payload;
    },
    setBasketData: (state, action) => {
      state.basketData = action.payload;
    },
    setOpenPopup: (state, action) => {
      state.openPopup = action.payload;
    },
    setProductIdToBeRemoved: (state, action) => {
      state.productIdtoBeRemoved = action.payload;
    },
    setSortedPrices: (state, action) => {
      state.sortedPrices = action.payload;
    },
    setSortName: (state, action) => {
      state.sortName = action.payload;
    },
  },
});

export const {
  setData,
  setFilteredData,
  setActiveFilter,
  setBasketData,
  setOpenPopup,
  setProductIdToBeRemoved,
  setSortedPrices,
  setSortName,
} = dataSlice.actions;
export default dataSlice.reducer;

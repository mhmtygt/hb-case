import "./App.css";
import { useEffect } from "react";
import productData from "./data/productData";
import { setData } from "./redux/slices/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { Layout } from "./components/Layout";
import { SubHeader } from "./components/SubHeader";
import { Header } from "./components/Header";
import { Content } from "./components/Content";

function App() {
  const dataState = useSelector((state) => state.dataState);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isEmpty(dataState.data)) {
      dispatch(setData(productData));
    }
    return () => {
      localStorage.removeItem("productData");
    };
  }, []);

  return (
    <Layout>
      <Header />
      <SubHeader />
      <Content />
    </Layout>
  );
}

export default App;

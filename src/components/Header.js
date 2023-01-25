import { Searchbox } from "../components/Searchbox";
import { Basket } from "../components/Basket";
import logo from "../assets/logo.svg";
export const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center",
      }}
    >
      <img src={logo} alt="logo" />
      <Searchbox />
      <Basket />
    </div>
  );
};

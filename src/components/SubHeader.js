import { Sort } from "../components/Sort";

export const SubHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center",
      }}
    >
      <p>
        iPhone iOS cep telefonu <br />
        Aranan Kelime:
      </p>
      <Sort />
    </div>
  );
};

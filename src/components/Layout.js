export const Layout = ({ children }) => {
  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "10vh 10vh 100vh",
          padding: "0px 80px 0px 80px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

import { CSSProperties } from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>RÖMUH</h1>
    </header>
  );
}

const headerStyle: CSSProperties = {
  height: "3rem",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  display: "flex",
  alignItems: "center",
};

const titleStyle: CSSProperties = {
  margin: 0,
  paddingLeft: "2rem",
  color: "#333",
  fontFamily: "helvetica",
};

export default Header;

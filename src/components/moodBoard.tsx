import { CSSProperties } from "react";
import Happy from "../assets/happy.png";


function MoodBoard() {
  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <img src={Happy} />
        <h1>You feel happy!</h1>
      </div>
    </div>
  );
}

const containerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  borderRadius: ".3rem",
};

const contentStyle: CSSProperties = {
  backgroundColor: "rgba(255, 255, 255, 0.4)",
  borderRadius: ".3rem",
  width: "60%",
  height: "80vh",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  marginTop: "2.5rem",
};

export default MoodBoard;

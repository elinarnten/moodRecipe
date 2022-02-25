import { CSSProperties } from "react";
import Happy from "../assets/happy.png";

function MoodBoard() {
  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <img src={Happy} />
        <h1>You feel happy!</h1>
        <div style={{ display: "flex", gap: "2rem" }}>
          <div>
            <div className="foodOne">Food</div>
            <div className="foodTwo">Food </div>
            <div className="foodThree">Food </div>
          </div>

          <div>
            <div className="moviePic" style={boxStyle} />
            <div className="moviePic" style={boxStyle} />
            <div className="moviePic" style={boxStyle} />
          </div>
          <div>
            <div className="movieOne">feel-good</div>
            <div className="movieTwo">feel-good</div>
            <div className="movieThree">feel-good</div>
          </div>
        </div>
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

const boxStyle: CSSProperties = {
  backgroundColor: "lightgrey",
  height: "2rem",
  width: "2rem",
  marginBottom: "1rem",
};

export default MoodBoard;

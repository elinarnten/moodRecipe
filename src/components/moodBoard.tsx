import { CSSProperties } from "react";
import Happy from "../assets/happy.png";

function MoodBoard() {
  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <img src={Happy} />
        <h1>You feel happy!</h1>
        <div style={{ display: "flex", gap: "2rem" }}>
          <div style={{ gap: "2rem" }}>
            <div className="foodOne">Food 1</div>
            <div className="foodTwo">Food 2 </div>
            <div className="foodThree">Food 3 </div>
          </div>

          <div>
            <div className="moviePic" style={boxStyle} />
            <div className="moviePic" style={boxStyle} />
            <div className="moviePic" style={boxStyle} />
          </div>
          <div>
            <div className="movieOne">Movie 1</div>
            <div className="movieTwo">Movie 2</div>
            <div className="movieThree">Movie 3</div>
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

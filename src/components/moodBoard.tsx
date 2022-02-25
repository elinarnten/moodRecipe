import { CSSProperties } from "react";
import Happy from "../assets/happy.png";
import Intern from "../assets/theIntern.jpg";
import Holiday from "../assets/theholiday_cover.jpg";
import Enchanto from "../assets/enchanto_cover.jpg";

function MoodBoard() {
  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <img src={Happy} />
        <h1>You feel happy!</h1>
        <div style={{ display: "flex", gap: "2rem" }}>
          <div style={{ paddingTop: "1rem" }}>
            <span style={textStyle}> Food that matches Your mood:</span>
            <div className="foodOne" style={{ paddingTop: "1rem" }}>
              Tacos
            </div>
            <div className="foodTwo" style={{ paddingTop: "1.5rem" }}>
              Plock
            </div>
            <div className="foodThree" style={{ paddingTop: "1.5rem" }}>
              Marängswiss
            </div>
          </div>

          <div style={{ padding: "1rem", marginTop: "2rem" }}>
            <img src={Intern} style={{ width: "80px", height: "110px" }} />
            <img src={Holiday} style={{ width: "80px", height: "110px" }} />
            <img src={Enchanto} style={{ width: "80px", height: "110px" }} />
          </div>
          <div style={{ paddingTop: "1rem" }}>
            <span style={textStyle}>Movies that matches Your mood:</span>
            <div className="movieOne" style={{ paddingTop: "1rem" }}>
              The Holiday
            </div>
            <div className="movieTwo" style={{ paddingTop: "1.5rem" }}>
              Enchanto
            </div>
            <div className="movieThree" style={{ paddingTop: "1.5rem" }}>
              The Intern
            </div>
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
  width: "70%",
  height: "80vh",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  marginTop: "2.5rem",
};

const textStyle: CSSProperties = {
  fontWeight: "bold",
  flex: "1",
};

export default MoodBoard;

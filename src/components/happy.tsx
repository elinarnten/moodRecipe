import { CSSProperties, useState } from "react";
import Intern from "../assets/theIntern.jpg";
import Holiday from "../assets/theholiday_cover.jpg";
import Enchanto from "../assets/enchanto_cover.jpg";
import happy from "../assets/happy.png";
import { Link } from "react-router-dom";

function Happy() {
  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <img src={happy} alt="happyEmoji" />
        <h1>You feel happy!</h1>
        <div style={{ display: "flex", gap: "2rem" }}>
          <div style={{ paddingTop: "1rem" }}>
            <span style={textStyle}> Food that matches Your mood:</span>
            <div className="foodOne" style={foodMovieStyle}>
              Pasta
            </div>
            <div className="foodOne" style={foodMovieStyle}>
              Marängswiss
            </div>
            <div className="foodOne" style={foodMovieStyle}>
              Chips
            </div>
          </div>

          <div style={{ padding: "1rem", marginTop: "2rem" }}>
            <img src={Intern} alt="moviecover" style={coverStyle} />
            <img src={Holiday} alt="moviecover" style={coverStyle} />
            <img src={Enchanto} alt="moviecover" style={coverStyle} />
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
        <Link to={"/NewMoodQuestion"}>
          <button style={backButton}>BACK!</button>
        </Link>
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
const foodMovieStyle: CSSProperties = {
  paddingTop: "1.5rem",
};
const coverStyle: CSSProperties = {
  width: "80px",
  height: "110px",
  marginRight: "1rem",
};

const backButton: CSSProperties = {
  border: "none",
  background: "none",
  height: "2rem",
  width: "2rem",
  color: "#333",
  margin: "1rem",
  fontWeight: "bold",
};

export default Happy;

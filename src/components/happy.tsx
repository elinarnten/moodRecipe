import { CSSProperties, useState } from "react";
import intern from "../assets/theIntern.jpg";
import holiday from "../assets/theholiday_cover.jpg";
import enchanto from "../assets/enchanto_cover.jpg";
import happy from "../assets/happy.png";
import { Link } from "react-router-dom";
import chips from "../assets/chips.jpg";
import pasta from "../assets/pasta.jpg";
import cupcakes from "../assets/cupcakes.jpg";

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
              <p style={{ paddingTop: "2rem" }}>Cupcakes </p>
            </div>
            <div className="foodOne" style={foodMovieStyle}>
              <p style={{ paddingTop: "1rem" }}>Chips</p>
            </div>
          </div>
          <div style={foodMovieStyle}>
            <img src={pasta} alt="pastadish" style={coverStyle} />
            <img src={cupcakes} alt="cupcakes" style={coverStyle} />
            <img src={chips} alt="chips" style={coverStyle} />
          </div>

          <div style={foodMovieStyle}>
            <img src={intern} alt="moviecover" style={coverStyle} />
            <img src={holiday} alt="moviecover" style={coverStyle} />
            <img src={enchanto} alt="moviecover" style={coverStyle} />
          </div>
          <div style={{ paddingTop: "1rem" }}>
            <span style={textStyle}>Movies that matches Your mood:</span>
            <div className="movieOne" style={foodMovieStyle}>
              The Intern
            </div>
            <div className="movieTwo" style={foodMovieStyle}>
              <p style={{ paddingTop: "2rem" }}>The Holiday</p>
            </div>
            <div className="movieThree" style={foodMovieStyle}>
              <p style={{ paddingTop: "1rem" }}>Enchanto</p>
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
  height: "100vh",
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
  paddingTop: "2rem",
  marginTop: "2rem",
  display: "flex",
  flexDirection: "column",
};
const coverStyle: CSSProperties = {
  width: "80px",
  height: "110px",
  marginRight: "1rem",
  marginBottom: "1rem",
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

import { CSSProperties, useEffect, useState } from "react";
import Intern from "../assets/theIntern.jpg";
import Holiday from "../assets/theholiday_cover.jpg";
import Enchanto from "../assets/enchanto_cover.jpg";
import happy from "../assets/happy.png";
import { Link } from "react-router-dom";

function Happy() {
  // useEffect(() => {
  //   const url =
  //     "https://unogsng.p.rapidapi.com/images?netflixid=81037848&offset=3&limit=2";

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url);
  //       const json = await response.json();
  //       console.log(json);
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  // const response = await fetch(
  //   `https://sholiday.faboul.se/dagar/v2.1/${year}/${month}`
  // );
  // const data = await response.json();

  // holidays = data.dagar.filter((day) => day.helgdag);

  // fetch("https://data-imdb1.p.rapidapi.com/titles/utils/genres", {
  //   method: "GET",
  //   headers: {
  //     "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
  //     "x-rapidapi-key": "510ecc4db2msh19c1d9eca136e4ap15bf98jsncf38b9e2cab6",
  //   },
  // })
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });
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

import { CSSProperties } from "react";
import Intern from "../assets/theIntern.jpg";
import Holiday from "../assets/theholiday_cover.jpg";
import Enchanto from "../assets/enchanto_cover.jpg";
import sad from "../assets/sad.png";
import sadDonut from "../assets/sad-donut.jpg";
import sadIceCream from "../assets/sad-ice-cream.jpg";
import sadPopcorn from "../assets/sad-popcorn.jpg";

function Sad() {
  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <img src={sad} alt="sadEmoji" />
        <h1>You feel sad!</h1>
        <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
          {/*  <span style={textStyle}> Food that matches your mood:</span> */}
          <div style={headings}>
            <h3>Food that matches your mood:</h3>
            <h3>Movies that matches your mood:</h3>
          </div>
          <div style={contentBlock}>
            <div style={foodBlock}>
              <div style={foodOne}>
                <h4>Donut</h4>
                <img src={sadDonut} alt="moviecover" style={coverStyle} />
              </div>
              <div style={foodTwo}>
                <h4>Ice Cream</h4>
                <img src={sadIceCream} alt="moviecover" style={coverStyle} />
              </div>
              <div style={foodThree}>
                <h4>Popcorn</h4>
                <img src={sadPopcorn} alt="moviecover" style={coverStyle} />
              </div>
            </div>

            <div style={movieBlock}>
              <div style={movieOne}>
                <img src={Intern} alt="moviecover" style={coverStyle} />
                <h4>The Intern</h4>
              </div>
              <div style={movieTwo}>
                <img src={Holiday} alt="moviecover" style={coverStyle} />
                <h4>The Holiday</h4>
              </div>
              <div style={movieThree}>
                <img src={Enchanto} alt="moviecover" style={coverStyle} />
                <h4>Enchanto</h4>
              </div>
            </div>
          </div>

          {/*  <div style={{ padding: "1rem", marginTop: "2rem" }}>
            <img src={Intern} alt="moviecover" style={coverStyle} />
            <img src={Holiday} alt="moviecover" style={coverStyle} />
            <img src={Enchanto} alt="moviecover" style={coverStyle} />
          </div>
          <div style={{ paddingTop: "1rem" }}>
            <span style={textStyle}>Movies that matches your mood:</span>
            <div className="movieOne" style={foodMovieStyle}>
              The Holiday
            </div>
            <div className="movieTwo" style={foodMovieStyle}>
              Enchanto
            </div>
            <div className="movieThree" style={foodMovieStyle}>
              The Intern
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

const headings: CSSProperties = {
  display: "flex",
};

const contentBlock: CSSProperties = {
  display: "flex",
  gap: "1rem",
};

const foodBlock: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: ".5rem",
  alignItems: "flex-end",
};

const foodOne: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const foodTwo: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const foodThree: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const movieBlock: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: ".5rem",
  alignItems: "flex-start",
};

const movieOne: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const movieTwo: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const movieThree: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const containerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  borderRadius: ".3rem",
};

const contentStyle: CSSProperties = {
  /*  backgroundColor: "rgba(255, 255, 255, 0.4)",
  borderRadius: ".3rem", */
  width: "70%",
  height: "80vh",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  marginTop: "2.5rem",
};

const coverStyle: CSSProperties = {
  width: "80px",
  height: "110px",
  marginRight: "1rem",
};

export default Sad;

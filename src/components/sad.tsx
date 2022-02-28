import { CSSProperties } from "react";
import Intern from "../assets/theIntern.jpg";
import Holiday from "../assets/theholiday_cover.jpg";
import Enchanto from "../assets/enchanto_cover.jpg";
import sad from "../assets/sad.png";

function Sad() {
  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <img src={sad} alt="sadEmoji" />
        <h1>You feel sad!</h1>
        <div style={{ display: "flex", gap: "2rem" }}>
          <div style={{ paddingTop: "1rem" }}>
            <span style={textStyle}> Food that matches Your mood:</span>
            <div className="foodOne" style={foodMovieStyle}>
              Comfortfood
            </div>
            <div className="foodTwo" style={foodMovieStyle}>
              Glass
            </div>
            <div className="foodThree" style={foodMovieStyle}>
              Choklad
            </div>
          </div>

          <div style={{ padding: "1rem", marginTop: "2rem" }}>
            <img src={Intern} alt="moviecover" style={coverStyle} />
            <img src={Holiday} alt="moviecover" style={coverStyle} />
            <img src={Enchanto} alt="moviecover" style={coverStyle} />
          </div>
          <div style={{ paddingTop: "1rem" }}>
            <span style={textStyle}>Movies that matches Your mood:</span>
            <div className="movieOne" style={foodMovieStyle}>
              The Holiday
            </div>
            <div className="movieTwo" style={foodMovieStyle}>
              Enchanto
            </div>
            <div className="movieThree" style={foodMovieStyle}>
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

const foodMovieStyle: CSSProperties = {
  paddingTop: "1.5rem",
};
const coverStyle: CSSProperties = {
  width: "80px",
  height: "110px",
  marginRight: "1rem",
};

export default Sad;

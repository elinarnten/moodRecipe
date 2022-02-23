import React, { CSSProperties } from "react";
import Happy from "../assets/happy.png";
import Angry from "../assets/angry.png";
import Bored from "../assets/bored.png";
import Sad from "../assets/sad.png";
import "./moodQuestion.css";
function MoodQuestion() {
  return (
    <div style={container}>
      <div style={moodContainer}>
        <div style={title}>
          <h2>how are you today?</h2>
        </div>

        <div style={moodBoard}>
          <img className="happy" src={Happy} />
          <div className="hide">Happy</div>
          <img src={Angry} />
          <img src={Bored} />
          <img src={Sad} />
        </div>
      </div>
    </div>
  );
}
const container: CSSProperties = {
  marginTop: "10rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const moodContainer: CSSProperties = {
  alignItems: "center",
  justifyContent: "center",
};

const title: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "2rem",
};
const moodBoard: CSSProperties = {
  height: "4rem",
  display: "flex",
  justifyContent: "space-between",
};

export default MoodQuestion;

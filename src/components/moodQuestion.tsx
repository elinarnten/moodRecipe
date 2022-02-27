import React, { CSSProperties } from "react";
import Happy from "../assets/happy.png";
import Angry from "../assets/angry.png";
import Bored from "../assets/bored.png";
import Sad from "../assets/sad.png";
import "./moodQuestion.css";
function MoodQuestion(props: any) {
  return (
    <div style={container}>
      <div style={moodContainer}>
        <div style={title}>
          <h2>Hello {props.value} , how are you today?</h2>
        </div>

        <div style={moodBoard}>
          <div className="hej">
            <img className="happy" src={Happy} />
            <p>Happy</p>
          </div>
          <div className="hello">
            <img className="angry" src={Angry} />
            <p>Angry</p>
          </div>
          <div>
            <img className="bored" src={Bored} />
            <p>Bored</p>
          </div>
          <div>
            <img className="sad" src={Sad} />
            <p>Sad</p>
          </div>
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
  position: "relative",
  textAlign: "center",
  display: "flex",
  justifyContent: "space-between",
};
const moodNames: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
};

export default MoodQuestion;

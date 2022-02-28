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
          <div className="hover-content">
            <img src={Happy} alt="Happy" />
            <div className="happy">Happy</div>
          </div>

          <div className="hover-content">
            <img src={Angry} alt="Angry" />
            <div className="angry">Angry</div>
          </div>

          <div className="hover-content">
            <img src={Bored} alt="Bored" />
            <div className="bored">Bored</div>
          </div>

          <div className="hover-content">
            <img src={Sad} alt="Sad" />
            <div className="sad">Sad</div>
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
  textAlign: "center",
  display: "flex",
  justifyContent: "space-between",
};

export default MoodQuestion;

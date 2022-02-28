import React, { CSSProperties } from "react";
import Happy from "../assets/happy.png";
import Angry from "../assets/angry.png";
import Bored from "../assets/bored.png";
import Sad from "../assets/sad.png";
import "./moodQuestion.css";
import { Link } from "react-router-dom";

function NewMoodQuestion() {
  return (
    <div style={container}>
      <div style={moodContainer}>
        <div style={title}>
          <h2>Hey, did your mode suddenly change?</h2>
        </div>

        <div style={moodBoard}>
          <Link to="/happy">
            <img className="happy" src={Happy} />
          </Link>
          <div className="hide">Happy</div>
          <Link to={"/angry"}>
            <img src={Angry} />
          </Link>
          <Link to={"/bored"}>
            <img src={Bored} />
          </Link>
          <Link to={"/sad"}>
            <img src={Sad} />
          </Link>
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

export default NewMoodQuestion;

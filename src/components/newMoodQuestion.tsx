import { CSSProperties } from "react";
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

        <div className="moods" style={moodBoard}>
          <div className="hover-content">
            <Link to="/happy">
              <img src={Happy} alt="Happy" />
              <div className="happy">Happy</div>
            </Link>
          </div>

          <div className="hover-content">
            <Link to={"/angry"}>
              <img src={Angry} alt="Angry" />
              <div className="angry">Angry</div>
            </Link>
          </div>

          <div className="hover-content">
            <Link to={"/bored"}>
              <img src={Bored} alt="Bored" />
              <div className="bored">Bored</div>
            </Link>
          </div>

          <div className="hover-content">
            <Link to={"/sad"}>
              <img src={Sad} alt="Sad" />
              <div className="sad">Sad</div>
            </Link>
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

export default NewMoodQuestion;

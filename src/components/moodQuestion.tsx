import React, { CSSProperties } from "react";
function MoodQuestion() {
  return (
    <div style={moodContainer}>
      <div style={title}>
        <h2>how are you today?</h2>
      </div>

      <div style={moodBoard}>
        <img src="../assets/happy.png" alt="happy" />
        <img src="../assets/sad.png" alt="sad" />
        <img src="../assets/bored.png" alt="bored" />
        <img src="../assets/angry.png" alt="angry" />
      </div>
    </div>
  );
}
const moodContainer: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const title: CSSProperties = {
  display: "flex",
  color: "orange",
};
const moodBoard: CSSProperties = {
  border: "solid pink 5px",
  height: "15rem",
  width: "30rem",
  display: "flex",
};

export default MoodQuestion;

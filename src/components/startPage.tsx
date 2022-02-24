import React from "react";
import { CSSProperties } from "react";

function StartPage(props: any) {
  return (
    <div style={divContainer}> 
        <div style={divContent}>
            <h2>Welcome to RÖMUH!</h2>
            <p>Sometimes we feel what we deserve - sometimes not. RÖMUH helps you to embrace how you feel 
                here and now: in this moment. The purpose isn't to make you happy, here all moods are valued 
                and it's important to be in different states. In other words.. if you're angry you should be 
                allowed to be angry, if you're happy you should be allowed to be happy.
            </p>
            <h3>Let's start, what's your name?</h3>
            <input style={inputStyle} onChange={newInput => props.nameInput(newInput.target.value)}></input>
            <button style={buttonStyle}>Go!</button>
        </div>
    </div> 
  );
}
const divContainer: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const divContent: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  marginTop: "4rem",
  color: "#333",
  width: "20rem",
  
};

const inputStyle: CSSProperties = {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: "100rem",
    border: "none",
    width: "10rem",
    color: "#333",
    padding: "0.5rem"
};

const buttonStyle: CSSProperties = {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: "100rem",
    border: "none",
    height: "2rem",
    width: "2rem",
    color: "#333",
    margin: "1rem"
};

export default StartPage;
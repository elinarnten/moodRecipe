import { render } from "react-dom";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./header";
import Happy from "./happy";
import Angry from "./angry";
import Sad from "./sad";
import Bored from "./bored";
import NewMoodQuestion from "./newMoodQuestion";
import { useState } from "react";
import ErrorBoundary from "./errorBoundary";
import MoodQuestion from "./moodQuestion";
import StartPage from "./startPage";

function App() {
  const [name, setName] = useState("");
  return (

    <div>
      <Header />
      <ErrorBoundary>
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>
        <BrowserRouter>
          <ErrorBoundary>
          <Routes>
            <Route path="/" element={<StartPage user={setName} />} />
            <Route
              path="/moodQuestion"
              element={<MoodQuestion name={name} />}
            />
            <Route path="/newMoodQuestion" element={<NewMoodQuestion />} />
            <Route path="/happy" element={<Happy />} />
            <Route path="/angry" element={<Angry />} />
            <Route path="/sad" element={<Sad />} />
            <Route path="/bored" element={<Bored />} />
          </Routes>
 </ErrorBoundary>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;

import { render } from "react-dom";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout";
import Header from "./header";
import Happy from "./happy";
import Angry from "./angry";
import Sad from "./sad";
import Bored from "./bored";
import NewMoodQuestion from "./newMoodQuestion";
import { useState } from "react";
import ErrorBoundary from "./errorBoundary";

function App() {
  const [name, setName] = useState("");
  return (
    <div style={{ background: "rgb(255, 255, 255, 0.4)" }}>
      <Header />
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/newMoodQuestion" element={<NewMoodQuestion />} />
            <Route path="/happy" element={<Happy />} />
            <Route path="/angry" element={<Angry />} />
            <Route path="/sad" element={<Sad />} />
            <Route path="/bored" element={<Bored />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;

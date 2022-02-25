import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout";
import MoodQuestion from "./moodQuestion";

import Happy from "./happy";
import Sad from "./sad";
import Angry from "./angry";
import Bored from "./bored";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/moodQuestion" element={<MoodQuestion />} />
        <Route path="/happy" element={<Happy />} />
        <Route path="/sad" element={<Sad />} />
        <Route path="/angry" element={<Angry />} />

        <Route path="/bored" element={<Bored />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout";
import MoodBoard from "./moodBoard";
import Header from "./header";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/moodBoard" element={<MoodBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

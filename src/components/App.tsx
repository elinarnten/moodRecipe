import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout";
import MoodQuestion from "./moodQuestion";
import MoodBoard from "./moodBoard";

function App() {
  return (
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path='/moodQuestion' element={<MoodQuestion />}/>
          <Route path='/moodBoard' element={<MoodBoard />}/>
        </Routes>
  </BrowserRouter>
    
    );
  }

export default App;

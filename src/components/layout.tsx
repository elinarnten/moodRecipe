import { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header";
import StartPage from "./startPage";
import MoodBoard from "./moodBoard";

function Layout() {
  const [inputNameValue, setInputNameValue] = useState('');
  console.log(inputNameValue);
  return( 
    <>
  <Header />
  <StartPage nameInput={setInputNameValue}/> 
  </>
    <div>
      <Header />
      <MoodBoard />
    </div>
);
}

export default Layout;

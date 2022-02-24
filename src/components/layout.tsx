import { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header";
import MoodQuestion from "./moodQuestion";
import StartPage from "./startPage";
import MoodBoard from "./moodBoard";

function Layout() {
  const [inputNameValue, setInputNameValue] = useState('');
  console.log(inputNameValue);
  const [value, setValue] = useState('');

  const printValue = () => {
    setValue(inputNameValue); 
  } 

  return( 
    <>
  <Header />
  <StartPage nameInput={setInputNameValue} onClick={printValue}/> 
  
    <div>
      <MoodQuestion print={value}/>
      <MoodBoard />
    </div>
    </>
);
}

export default Layout;

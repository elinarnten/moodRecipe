import { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header";
import StartPage from "./startPage";

function Layout() {
  const [inputNameValue, setInputNameValue] = useState('');
  console.log(inputNameValue);
  return( 
    <>
  <Header />
  <StartPage nameInput={setInputNameValue}/> 
  </>
)
}

export default Layout;

import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header";
import MoodQuestion from "./moodQuestion";

function Layout() {
  return (
    <div>
      <Header />
      <MoodQuestion />
    </div>
  );
}

export default Layout;

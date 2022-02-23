import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header";
import MoodBoard from "./moodBoard";

function Layout() {
  return (
    <div>
      <Header />
      <MoodBoard />
    </div>
  );
}

export default Layout;

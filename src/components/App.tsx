import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout";
import Header from "./header";
import Happy from "./happy";
import Angry from "./angry";
import Sad from "./sad";
import Bored from "./bored";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

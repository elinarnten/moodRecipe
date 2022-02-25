import { useState } from "react";
import MoodQuestion from "./moodQuestion";
import StartPage from "./startPage";

function Layout() {
  const [inputNameValue, setInputNameValue] = useState("");
  console.log(inputNameValue);
  const [visible, setIsVisible] = useState(true);
  console.log(visible);

  return (
    <>
      {visible ? (
        <StartPage nameInput={setInputNameValue} isVisible={setIsVisible} />
      ) : (
        <MoodQuestion name={inputNameValue} />
      )}
    </>
  );
}

export default Layout;

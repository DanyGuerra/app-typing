import React, { useEffect } from "react";
import Keyboard from "./Keyboard";
import TextBox from "./TextBox";

function TypingPlay() {
  const [actualKey, setActualKey] = React.useState("");
  const [actualText, setActualText] = React.useState([]);

  return (
    <>
      <TextBox />
      <Keyboard
        colorKeyActived={"#502888"}
        colorTextActived={"#fffbfe"}
        setActualKey={setActualKey}
        actualKey={actualKey}
      />
    </>
  );
}

export default TypingPlay;

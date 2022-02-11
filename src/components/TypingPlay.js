import React from "react";
import Keyboard from "./Keyboard";
import TextBox from "./TextBox";

function TypingPlay() {
  const [actualKey, setActualKey] = React.useState("");
  const [actualText, setActualText] = React.useState(["h", "o", "l", "a"]);

  return (
    <>
      <TextBox actualText={actualText} />
      <Keyboard
        colorKeyActived={"#502888"}
        colorTextActived={"#fffbfe"}
        setActualKey={setActualKey}
        actualKey={actualKey}
        actualText={actualText}
        setActualText={setActualText}
      />
    </>
  );
}

export default TypingPlay;

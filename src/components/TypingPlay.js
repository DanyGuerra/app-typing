import React, { useEffect } from "react";
import Keyboard from "./Keyboard";
import TextBox from "./TextBox";

function TypingPlay() {
  const [actualKey, setActualKey] = React.useState("");
  const [actualText, setActualText] = React.useState([]);

  useEffect(() => {
    initialTyping(["H", "o", "l", "a"]);
  }, []);

  const initialTyping = (message) => {
    let offset = 0;
    message.map((letter) => {
      setTimeout(() => {
        setActualText((c) => c.concat([letter]));
      }, 0 + offset);

      offset += 500;
    });
  };

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

import React, { useEffect } from "react";
import Keyboard from "./Keyboard";
import TextBox from "./TextBox";

function TypingPlay() {
  const [actualKey, setActualKey] = React.useState("");
  const [actualText, setActualText] = React.useState([]);

  useEffect(() => {
    let str = "Bienvenido a Typing App...";
    let arr = str.split("");
    playTyping(arr);
  }, []);

  const playTyping = (message) => {
    let offset = 0;
    message.map((letter) => {
      setTimeout(() => {
        setActualText((c) => c.concat([letter]));
      }, 100 + offset);

      offset += 100;
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

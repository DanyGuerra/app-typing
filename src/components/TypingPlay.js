import React, { useEffect } from "react";
import Keyboard from "./Keyboard";
import TextBox from "./TextBox";

function TypingPlay() {
  const [actualKey, setActualKey] = React.useState("");
  const [actualText, setActualText] = React.useState([]);

  useEffect(() => {
    welcomeMessage();
  }, []);

  const playTyping = (message) => {
    let offset = 0;
    message.map((letter) => {
      setTimeout(() => {
        setActualText((c) => c.concat([letter]));
        setActualKey(letter.toLowerCase());
      }, 200 + offset);

      offset += 200;
    });
  };

  const welcomeMessage = () => {
    let str = "Bienvenido a Typing App...";
    let arrMessage = str.split("");
    arrMessage.push("");
    playTyping(arrMessage);
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

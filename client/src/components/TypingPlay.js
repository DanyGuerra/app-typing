import React, { useEffect } from "react";
import Keyboard from "./Keyboard";
import TextBoxPlay from "./TextBoxPlay";
import styled from "styled-components";

const KeyboardSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .keyboard {
    width: 80%;
  }
`;

function TypingPlay({ welTextFinished, setWelTextFinished }) {
  const [actualKey, setActualKey] = React.useState("");
  const [actualText, setActualText] = React.useState([]);

  const welcomeMessage = () => {
    let introMessage = "Bienvenido a Typing App ...";
    let arrMessage = introMessage.split("");
    let outputMessage = [];
    arrMessage.map((item) => {
      outputMessage = outputMessage.concat([item, ""]);
    });
    let awaitMessage = playTyping(outputMessage);
    return awaitMessage;
  };

  useEffect(() => {
    let p1 = welcomeMessage();

    p1.then(() => {
      setWelTextFinished(true);
    });

    return function cleanup() {
      document.removeEventListener("keydown", handleKeydown);
      document.removeEventListener("keyup", handleKeyup);
    };
  }, []);

  const playTyping = (message) => {
    let offset = 0;
    let finishWelcome;

    message.map((letter, index) => {
      finishWelcome = new Promise((resolve) => {
        setTimeout(() => {
          setActualText((c) => c.concat([letter]));
          setActualKey(letter.toLowerCase());
          if (index === message.length - 1) {
            resolve("ok");
          }
        }, 100 + offset);
      });
      if (index % 2 === 0) {
        offset += 100;
      } else {
        offset += 30;
      }
    });

    return finishWelcome;
  };

  const deleteLastItem = (array) => {
    const output = array;
    output.pop();
    return output;
  };

  const handleKeydown = (e) => {
    const keyPressed = e.code;
    e.preventDefault();

    const repeat = e.repeat;

    if (repeat) {
      setActualKey("");
      return;
    }

    switch (keyPressed) {
      case "Digit0":
        setActualKey("0");
        setActualText((current) => current.concat("0"));
        break;
      case "Digit1":
        setActualKey("1");
        setActualText((current) => current.concat("1"));
        break;
      case "Digit2":
        setActualKey("2");
        setActualText((current) => current.concat("2"));
        break;
      case "Digit3":
        setActualKey("3");
        setActualText((current) => current.concat("3"));
        break;
      case "Digit4":
        setActualKey("4");
        setActualText((current) => current.concat("4"));
        break;
      case "Digit5":
        setActualKey("5");
        setActualText((current) => current.concat("5"));
        break;
      case "Digit6":
        setActualKey("6");
        setActualText((current) => current.concat("6"));
        break;
      case "Digit7":
        setActualKey("7");
        setActualText((current) => current.concat("7"));
        break;
      case "Digit8":
        setActualKey("8");
        setActualText((current) => current.concat("8"));
        break;
      case "Digit9":
        setActualKey("9");
        setActualText((current) => current.concat("9"));
        break;
      case "Minus":
        setActualKey("-");
        setActualText((current) => current.concat("-"));
        break;
      case "Equal":
        setActualKey("=");
        setActualText((current) => current.concat("="));
        break;

      case "Backquote":
        setActualKey("`");
        setActualText((current) => current.concat("`"));
        break;
      case "Tab":
        setActualKey("Tab");
        break;
      case "CapsLock":
        setActualKey("CapsLock");
        break;
      case "ShiftLeft":
        setActualKey("ShiftLeft");
        break;
      case "ControlLeft":
        setActualKey("ControlLeft");
        break;
      case "AltLeft":
        setActualKey("AltLeft");
        break;

      case "Enter":
        setActualKey("Enter");
        break;
      case "KeyF":
        setActualKey("f");
        setActualText((current) => current.concat("f"));
        break;
      case "KeyD":
        setActualKey("d");
        setActualText((current) => current.concat("d"));
        break;
      case "KeyS":
        setActualKey("s");
        setActualText((current) => current.concat("s"));
        break;
      case "KeyA":
        setActualKey("a");
        setActualText((current) => current.concat("a"));
        break;

      case "KeyQ":
        setActualKey("q");
        setActualText((current) => current.concat("q"));
        break;
      case "KeyW":
        setActualKey("w");
        setActualText((current) => current.concat("w"));
        break;
      case "KeyE":
        setActualKey("e");
        setActualText((current) => current.concat("e"));
        break;
      case "KeyR":
        setActualKey("r");
        setActualText((current) => current.concat("r"));
        break;

      case "KeyZ":
        setActualKey("z");
        setActualText((current) => current.concat("z"));
        break;
      case "KeyX":
        setActualKey("x");
        setActualText((current) => current.concat("x"));
        break;
      case "KeyC":
        setActualKey("c");
        setActualText((current) => current.concat("c"));
        break;
      case "KeyV":
        setActualKey("v");
        setActualText((current) => current.concat("v"));
        break;

      case "KeyT":
        setActualKey("t");
        setActualText((current) => current.concat("t"));
        break;
      case "KeyG":
        setActualKey("g");
        setActualText((current) => current.concat("g"));
        break;
      case "KeyB":
        setActualKey("b");
        setActualText((current) => current.concat("b"));
        break;

      case "KeyY":
        setActualKey("y");
        setActualText((current) => current.concat("y"));
        break;
      case "KeyH":
        setActualKey("h");
        setActualText((current) => current.concat("h"));
        break;
      case "KeyN":
        setActualKey("n");
        setActualText((current) => current.concat("n"));
        break;

      case "KeyJ":
        setActualKey("j");
        setActualText((current) => current.concat("j"));
        break;
      case "KeyK":
        setActualKey("k");
        setActualText((current) => current.concat("k"));
        break;
      case "KeyL":
        setActualKey("l");
        setActualText((current) => current.concat("l"));
        break;
      case "Semicolon":
        setActualKey(";");
        setActualText((current) => current.concat(";"));
        break;

      case "KeyU":
        setActualKey("u");
        setActualText((current) => current.concat("u"));
        break;
      case "KeyI":
        setActualKey("i");
        setActualText((current) => current.concat("i"));
        break;
      case "KeyO":
        setActualKey("o");
        setActualText((current) => current.concat("o"));
        break;
      case "KeyP":
        setActualKey("p");
        setActualText((current) => current.concat("p"));
        break;

      case "KeyM":
        setActualKey("m");
        setActualText((current) => current.concat("m"));
        break;
      case "Comma":
        setActualKey(",");
        setActualText((current) => current.concat(","));
        break;
      case "Period":
        setActualKey(".");
        setActualText((current) => current.concat("."));
        break;
      case "Slash":
        setActualKey("/");
        setActualText((current) => current.concat("/"));
        break;

      case "BracketLeft":
        setActualKey("[");
        setActualText((current) => current.concat("["));
        break;
      case "BracketRight":
        setActualKey("]");
        setActualText((current) => current.concat("]"));
        break;

      case "Quote":
        setActualKey("'");
        setActualText((current) => current.concat("'"));
        break;

      case "IntlBackslash":
        setActualKey("IntlBackslash");
        setActualText((current) => current.concat("\\"));
        break;
      case "Backslash":
        setActualKey("Backslash");
        setActualText((current) => current.concat("\\"));
        break;
      case "AltRight":
        setActualKey("AltRight");
        break;
      case "ControlRight":
        setActualKey("ControlRight");
        break;
      case "ShiftRight":
        setActualKey("ShiftRight");
        break;
      case "Backspace":
        setActualKey("Backspace");
        setActualText((current) => [...deleteLastItem(current)]);
        break;
      case "Space":
        setActualKey(" ");
        setActualText((current) => current.concat(" "));
        break;

      default:
        break;
    }
  };

  const handleKeyup = (e) => {
    setActualKey("");
  };

  return (
    <>
      <TextBoxPlay
        actualText={actualText}
        welTextFinished={welTextFinished}
        handleKeydown={handleKeydown}
        handleKeyup={handleKeyup}
        setWelTextFinished={setWelTextFinished}
        setActualText={setActualText}
      />
      <KeyboardSection>
        <div className="keyboard">
          <Keyboard
            setActualKey={setActualKey}
            actualKey={actualKey}
            actualText={actualText}
            setActualText={setActualText}
            handleKeydown={handleKeydown}
            handleKeyup={handleKeyup}
          />
        </div>
      </KeyboardSection>
    </>
  );
}

export default TypingPlay;

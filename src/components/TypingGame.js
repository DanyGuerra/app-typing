import React, { useEffect } from "react";
import Keyboard from "./Keyboard";
import TextBoxGame from "./TextBoxGame";
import styled from "styled-components";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import { useParams } from "react-router";
import KeyboardGame from "./KeyBoardGame";

const KeyboardSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  .keyboard {
    width: 50%;
  }as
`;

function TypingGame({}) {
  const [actualKey, setActualKey] = React.useState("");
  const [actualToPressed, setActualToPressed] = React.useState("");
  const [actualText, setActualText] = React.useState([]);
  const [isStarted, setIsStarted] = React.useState(false);
  const [isMatching, setIsMatching] = React.useState(false);
  const [isGameEnded, setIsGameEnded] = React.useState(false);
  const [indexLetter, setIndexLetter] = React.useState(0);
  const [errorCounter, setErrorCounter] = React.useState(0);

  let { lessonId } = useParams();

  useEffect(() => {
    setActualText(
      textToArray("este es mi ejemplo de como poder escribir mas rapido")
    );
    return cleanup;
  }, []);

  const cleanup = () => {
    document.removeEventListener("keydown", handleKeydown);
    document.removeEventListener("keyup", handleKeyup);
  };

  useEffect(() => {
    gameLogic();
  }, [actualKey, actualToPressed]);

  const textToArray = (content) => {
    let arrMessage = content.split("");
    return arrMessage;
  };

  const gameLogic = () => {
    setActualToPressed(actualText[indexLetter]);

    if (indexLetter === actualText.length) {
      setIsGameEnded(true);
    } else if (actualText[indexLetter] === actualKey) {
      setIsMatching(true);
      setIndexLetter((indexLetter) => indexLetter + 1);
    } else if (isMatching === false) {
      setErrorCounter((errorCounter) => errorCounter + 1);
    } else {
      setIsMatching(false);
    }
  };

  const handleRestart = () => {
    setIndexLetter(0);
    setActualToPressed(actualText[0]);
    setErrorCounter(0);
  };

  const handleStart = () => {
    setIsStarted(true);
    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("keyup", handleKeyup);
  };

  const deleteLastItem = (array) => {
    const output = array;
    output.pop();
    return output;
  };

  const handleKeydown = (e) => {
    const keyPressed = e.code;
    e.preventDefault();

    switch (keyPressed) {
      case "Digit0":
        setActualKey("0");
        break;
      case "Digit1":
        setActualKey("1");
        break;
      case "Digit2":
        setActualKey("2");
        break;
      case "Digit3":
        setActualKey("3");
        break;
      case "Digit4":
        setActualKey("4");
        break;
      case "Digit5":
        setActualKey("5");
        break;
      case "Digit6":
        setActualKey("6");
        break;
      case "Digit7":
        setActualKey("7");
        break;
      case "Digit8":
        setActualKey("8");
        break;
      case "Digit9":
        setActualKey("9");
        break;
      case "Minus":
        setActualKey("-");
        break;
      case "Equal":
        setActualKey("=");
        break;

      case "Backquote":
        setActualKey("`");
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
        break;
      case "KeyD":
        setActualKey("d");
        break;
      case "KeyS":
        setActualKey("s");
        break;
      case "KeyA":
        setActualKey("a");
        break;

      case "KeyQ":
        setActualKey("q");
        break;
      case "KeyW":
        setActualKey("w");
        break;
      case "KeyE":
        setActualKey("e");
        break;
      case "KeyR":
        setActualKey("r");
        break;

      case "KeyZ":
        setActualKey("z");
        break;
      case "KeyX":
        setActualKey("x");
        break;
      case "KeyC":
        setActualKey("c");
        break;
      case "KeyV":
        setActualKey("v");
        break;

      case "KeyT":
        setActualKey("t");
        break;
      case "KeyG":
        setActualKey("g");
        break;
      case "KeyB":
        setActualKey("b");
        break;

      case "KeyY":
        setActualKey("y");
        break;
      case "KeyH":
        setActualKey("h");
        break;
      case "KeyN":
        setActualKey("n");
        break;

      case "KeyJ":
        setActualKey("j");
        break;
      case "KeyK":
        setActualKey("k");
        break;
      case "KeyL":
        setActualKey("l");
        break;
      case "Semicolon":
        setActualKey(";");
        break;

      case "KeyU":
        setActualKey("u");
        break;
      case "KeyI":
        setActualKey("i");
        break;
      case "KeyO":
        setActualKey("o");
        break;
      case "KeyP":
        setActualKey("p");
        break;

      case "KeyM":
        setActualKey("m");
        break;
      case "Comma":
        setActualKey(",");
        break;
      case "Period":
        setActualKey(".");
        break;
      case "Slash":
        setActualKey("/");
        break;

      case "BracketLeft":
        setActualKey("[");
        break;
      case "BracketRight":
        setActualKey("]");
        break;

      case "Quote":
        setActualKey("'");
        break;

      case "IntlBackslash":
        setActualKey("IntlBackslash");

        break;
      case "Backslash":
        setActualKey("Backslash");

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

        break;
      case "Space":
        setActualKey(" ");
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
      <KeyboardSection>
        <TextBoxGame
          actualText={actualText}
          handleKeydown={handleKeydown}
          handleKeyup={handleKeyup}
          setActualText={setActualText}
          indexLetter={indexLetter}
        />
        {isStarted ? (
          <></>
        ) : (
          <>
            <PrimaryButton onClick={handleStart}> Iniciar</PrimaryButton>
          </>
        )}
        <SecondaryButton modifiers={["small"]} onClick={handleRestart}>
          {" "}
          Reiniciar{" "}
        </SecondaryButton>
        <div className="keyboard">
          <KeyboardGame
            setActualKey={setActualKey}
            actualKey={actualKey}
            actualText={actualText}
            setActualText={setActualText}
            handleKeydown={handleKeydown}
            handleKeyup={handleKeyup}
            actualToPressed={actualToPressed}
          />
        </div>
        <h1>This is the lesson Id: {lessonId}</h1>
      </KeyboardSection>
    </>
  );
}

export default TypingGame;

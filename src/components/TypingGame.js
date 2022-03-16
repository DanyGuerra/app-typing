import React, { useEffect } from "react";
import TextBoxGame from "./TextBoxGame";
import styled from "styled-components";
import { useParams } from "react-router";
import KeyboardGame from "./KeyBoardGame";
import GameControls from "./GameControls";
import GameBoard from "./GameBoard";

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

const TypingGame = () => {
  const [actualKey, setActualKey] = React.useState("");
  const [actualText, setActualText] = React.useState(["", ""]);
  const [isStarted, setIsStarted] = React.useState(false);
  const [hits, setHits] = React.useState(0);
  const [isGameEnded, setIsGameEnded] = React.useState(false);
  const [indexLetter, setIndexLetter] = React.useState(0);
  const [errorCounter, setErrorCounter] = React.useState(0);
  const [isMatching, setIsMatching] = React.useState(false);
  const [actualToPressed, setActualToPressed] = React.useState("");

  let { lessonId } = useParams();

  useEffect(() => {
    setActualText(
      textToArray(
        "este es mi texto de ejemplo, ahora son mas palabras que antes, texto de ejemplo"
      )
    );
    setActualToPressed("a");
    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("keyup", handleKeyup);

    return cleanup;
  }, []);

  useEffect(() => {
    gameLogic();
  }, [actualKey]);

  const cleanup = () => {
    document.removeEventListener("keydown", handleKeydown);
    document.removeEventListener("keyup", handleKeyup);
  };

  const textToArray = (content) => {
    let arrMessage = content.split("");
    return arrMessage;
  };

  const gamePracticeLogic = () => {
    setActualToPressed(actualText[indexLetter]);
    setIsGameEnded(false);

    if (indexLetter >= actualText.length) {
      handleFinish();
      return;
    } else if (actualText[indexLetter] === actualKey) {
      if (isMatching) {
        setHits((prev) => prev + 1);
      }
      setIndexLetter((prev) => prev + 1);
      setIsMatching(true);
    } else if (actualKey !== "") {
      setIsMatching(false);
      setErrorCounter((prev) => prev + 1);
    }
  };

  const gameLogic = () => {
    setActualToPressed("");
    if (actualText[indexLetter]) {
      setActualToPressed(actualText[indexLetter]);
    }

    if (indexLetter === actualText.length) {
      handleFinish();
      return;
    } else if (actualText[indexLetter] === actualKey) {
      if (isMatching) {
        setHits((prev) => prev + 1);
      }
      setIsMatching(true);
    } else if (actualKey !== "") {
      setIsMatching(false);
      setErrorCounter((prev) => prev + 1);
    }

    if (actualKey !== "") {
      setIndexLetter((prev) => prev + 1);
      setIsMatching(true);
    }
  };

  const handleRestart = () => {
    setIndexLetter(0);
    setActualToPressed(actualText[0]);
    setErrorCounter(0);
    setIsGameEnded(false);
    setIsStarted(false);
    setHits(0);
  };

  const handleStart = () => {
    setIsStarted(true);
  };

  const handleFinish = () => {
    // setIsStarted(false);
    setIsGameEnded(true);
    cleanup();
  };

  // const deleteLastItem = (array) => {
  //   const output = array;
  //   output.pop();
  //   return output;
  // };

  const handleKeydown = (e) => {
    const keyPressed = e.code;
    const repeat = e.repeat;
    // e.preventDefault();
    handleStart();

    if (repeat) {
      setActualKey("");
      return;
    }

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
        e.preventDefault();
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
        <GameBoard
          total={actualText.length}
          errorCounter={errorCounter}
          hits={hits}
        ></GameBoard>
        <GameControls
          isStarted={isStarted}
          handleStart={handleStart}
          handleRestart={handleRestart}
          isGameEnded={isGameEnded}
        ></GameControls>
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
};

export default TypingGame;

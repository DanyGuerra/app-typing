import React from "react";
import { PrimaryButton } from "./Buttons";
import styled from "styled-components";
import { typeScale } from "../utils";
// import gsap from "gsap";

const TextboxArea = styled.section`
  font-size: ${typeScale.header1};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  .textbox {
    padding: 5%;
    width: 80%;
    height: 100px;
    background-color: app.$black-theme2;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    gap: 0.1rem;
    span {
      display: inline-block;
      height: 2rem;
      color: app.$ligth-color;
    }

    .space {
      width: 0.5rem;
      height: 2rem;
    }
    .cursor {
      border-right: solid ${(props) => props.theme.textColor} 1px;
    }
  }
`;

function TextBox({
  actualText,
  welTextFinished,
  setWelTextFinished,
  handleKeydown,
  handleKeyup,
  setActualText,
}) {
  // useEffect(() => {
  //   let tl = gsap.timeline({ repeat: -1 });

  //   tl.set(lastLetter.current, {
  //     backgroundColor: "rgba(1, 1, 1, 0)",
  //     duration: 1,
  //   });
  //   tl.to(lastLetter.current, {
  //     backgroundColor: "rgba(1, 1, 1, 1)",
  //     duration: 1,
  //   });
  // }, [lastLetter]);

  const addListener = () => {
    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("keyup", handleKeyup);
    setWelTextFinished(false);

    // const typeSomething = "Escribe Algo...";
    // setActualText(typeSomething.split(""));
    setActualText([]);
  };

  const textState = (item, index) => {
    let classType = "";
    let isLastLetter = false;

    if (item === " ") {
      classType = "space";
    }
    if (index === actualText.length - 1) {
      isLastLetter = true;
    }

    if (item === "" && isLastLetter) {
      return <span key={`empty${index}`} className="cursor"></span>;
    } else if (item === "") {
      return <></>;
    } else {
      return (
        <>
          <span key={`type${index}`} className={`${classType}`}>
            {item}
          </span>
          {isLastLetter ? (
            <span key={`cursor${index}`} className="cursor"></span>
          ) : (
            <></>
          )}
        </>
      );
    }
  };

  return (
    <>
      <TextboxArea>
        <div className="textbox">
          {actualText.length === 0 ? <span className="cursor"></span> : <></>}
          {actualText.map(textState)}
        </div>
        {welTextFinished ? (
          <PrimaryButton
            modifiers={["large", "success", "primaryButtonSuccess"]}
            onClick={addListener}
          >
            Intentalo!!
          </PrimaryButton>
        ) : (
          <></>
        )}
      </TextboxArea>
    </>
  );
}

export default TextBox;

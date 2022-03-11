import React from "react";
import { PrimaryButton } from "./Buttons";
import styled from "styled-components";
import { typeScale } from "../utils";
// import gsap from "gsap";
import { useSpring, animated } from "react-spring";

const TextboxArea = styled.section`
  font-size: ${typeScale.header2};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  width: 50%;
  .textbox {
    padding: 5%;
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

    .activeLetter {
      background-color: ${(props) => props.theme.primaryColor};
      color: ${(props) => props.theme.neutralCien};
    }
  }
`;

function TextBoxGame({ actualText, indexLetter }) {
  const animationCursor = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    loop: true,
    config: {
      duration: 750,
    },
  });

  const animationText = useSpring({
    from: { opacity: 0, transform: "translateY(-100%)" },
    to: { opacity: 1, transform: "translateY(0%)" },
  });

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
      return (
        <animated.span
          key={`empty${index}`}
          className="cursor"
          style={animationCursor}
        ></animated.span>
      );
    } else if (item === "") {
      return <></>;
    } else {
      return (
        <>
          <animated.span
            key={`type${index}`}
            className={`${classType} ${
              index === indexLetter ? "activeLetter" : ""
            }`}
            style={animationText}
          >
            {item}
          </animated.span>
        </>
      );
    }
  };

  return (
    <>
      <TextboxArea>
        <div className="textbox">
          {actualText.length === 0 ? (
            <animated.span
              className="cursor"
              style={animationCursor}
            ></animated.span>
          ) : (
            <></>
          )}
          {actualText.map(textState)}
        </div>
      </TextboxArea>
    </>
  );
}

export default TextBoxGame;

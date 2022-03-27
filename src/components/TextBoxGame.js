import React from "react";
import { PrimaryButton } from "./Buttons";
import styled from "styled-components";
import { typeScale } from "../utils";
// import gsap from "gsap";
import { useSpring, animated, easings } from "react-spring";

const TextboxArea = styled.section`
  font-size: ${typeScale.header2};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;

  .textbox {
    padding: 0 5%;
    height: 100%;
    background-color: app.$black-theme2;
    display: flex;
    flex-wrap: wrap;
    gap: 0.1rem;
    padding-bottom: 30px;
    border-bottom: solid ${(props) => props.theme.textColorNeutral} 1px;
    span {
      display: inline-block;
      height: 2rem;
      color: app.$ligth-color;
    }

    .space {
      width: 0.5rem;
      height: 2rem;
    }

    .is-match {
      background-color: green;
    }

    .no-match {
      background-color: red;
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
    from: { opacity: 0, transform: "translateY(-30%)" },
    to: { opacity: 1, transform: "translateY(0%)" },
  });

  const animationTextBox = useSpring({
    from: { opacity: 0, transform: "translateY(-30%)" },
    to: { opacity: 1, transform: "translateY(0%)" },
    config: { duration: 1500, easing: easings.easeOutBounce },
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
            } `}
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
        <animated.div className="textbox" style={animationTextBox}>
          {actualText.length === 0 ? (
            <animated.span
              className="cursor"
              style={animationCursor}
            ></animated.span>
          ) : (
            <></>
          )}
          {actualText.map(textState)}
        </animated.div>
      </TextboxArea>
    </>
  );
}

export default TextBoxGame;

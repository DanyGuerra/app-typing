import React from "react";
import { PrimaryButton } from "./Buttons";
import styled from "styled-components";
import { typeScale } from "../utils";
// import gsap from "gsap";
import { useSpring, animated } from "react-spring";

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
      border-right: solid ${(props) => props.theme.textColor} 2px;
    }
  }
`;

function TextBoxGame({
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

  const addListener = () => {
    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("keyup", handleKeyup);
    setWelTextFinished(false);

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
            className={`${classType}`}
            style={animationText}
          >
            {item}
          </animated.span>
          {isLastLetter ? (
            <animated.span
              key={`cursor${index}`}
              className="cursor"
              style={animationCursor}
            ></animated.span>
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

export default TextBoxGame;

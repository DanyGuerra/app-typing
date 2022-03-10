import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { typeScale } from "../utils";
import { primaryFont } from "../utils";
import { useParams, useNavigate } from "react-router-dom";
import Lesson from "./Lesson";

const lessons = [
  { id: 124, number: 1, name: "Leccion 1" },
  { id: 12414, number: 2, name: "Leccion 2" },
  { id: 1244, number: 3, name: "Leccion 3" },
  { id: 1241514, number: 4, name: "Leccion 4" },
  { id: 16514, number: 5, name: "Leccion 5" },
];

const LessonsStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  .wrapper {
    width: 60%;
    height: 100%;
    padding: 0px 20px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 50px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 150px;
    height: 150px;
    color: ${(props) => props.theme.textColor};
    font-family:
    font-size: ${typeScale.header1};
    background-color: ${(props) => props.theme.backgroundColor};
    border: solid ${(props) => props.theme.textColorNeutral} 2px;
    border-radius: 0.5rem;
    &:hover {
      box-shadow: 0 5px 16px ${(props) => props.theme.shadow};
      cursor: pointer;
    }
    &:focus {
      outline: 3px solid ${(props) => props.theme.primaryHoverColor};
      outline-offset: 2px;
    }
  }
`;

function Lessons() {
  let params = useParams();

  const animationLessons = useSpring({
    from: { opacity: 0, transform: "translateX(30%)" },
    to: { opacity: 1, transform: "translateX(0%)" },
  });

  const listLessons = lessons.map((lesson, index) => (
    <Lesson id={lesson.id} lesson={lesson}></Lesson>
  ));

  return (
    <LessonsStyle>
      <animated.div style={animationLessons} className="wrapper">
        {listLessons}
      </animated.div>
    </LessonsStyle>
  );
}

export default Lessons;

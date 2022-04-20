import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { typeScale } from "../utils";
import { primaryFont } from "../utils";
import { useParams, useNavigate } from "react-router-dom";
import Lesson from "./Lesson";

const lessons = [
  { id: 12473462, number: 1, name: "Leccion 1" },
  { id: 124141, number: 2, name: "Leccion 2" },
  { id: 124412341234, number: 3, name: "Leccion 3" },
  { id: 1241514890, number: 4, name: "Leccion 4" },
  { id: 165141235, number: 5, name: "Leccion 5" },
  { id: 12467845, number: 6, name: "Leccion 1" },
  { id: 1241423461, number: 7, name: "Leccion 2" },
  { id: 12441053, number: 8, name: "Leccion 3" },
  { id: 12415140862, number: 9, name: "Leccion 4" },
  { id: 1651495785, number: 10, name: "Leccion 5" },
  { id: 1240578, number: 11, name: "Leccion 1" },
  { id: 124143243572, number: 12, name: "Leccion 2" },
  { id: 12449732598, number: 13, name: "Leccion 3" },
  { id: 124151409876, number: 14, name: "Leccion 4" },
  { id: 12651423, number: 15, name: "Leccion 5" },
  { id: 122416801, number: 16, name: "Leccion 1" },
  { id: 1214414, number: 17, name: "Leccion 2" },
  { id: 12440987, number: 18, name: "Leccion 3" },
  { id: 12415142347, number: 19, name: "Leccion 4" },
  { id: 1651487698765, number: 20, name: "Leccion 5" },
  { id: 1242379876, number: 21, name: "Leccion 1" },
  { id: 1241499764, number: 22, name: "Leccion 2" },
  { id: 124409876, number: 23, name: "Leccion 3" },
  { id: 124151409, number: 24, name: "Leccion 4" },
  { id: 16514098637, number: 25, name: "Leccion 5" },
  { id: 124085235, number: 26, name: "Leccion 1" },
  { id: 12414023501, number: 27, name: "Leccion 2" },
  { id: 1244151095, number: 28, name: "Leccion 3" },
  { id: 124151413450980, number: 29, name: "Leccion 4" },
  { id: 1651409234509, number: 30, name: "Leccion 5" },
  { id: 1651409132509, number: 31, name: "Leccion 5" },
  { id: 1651417356745, number: 32, name: "Leccion 5" },
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
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 50px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 150px;
    height: 150px;
    color: ${(props) => props.theme.textColor};
    font-family: ${primaryFont};
    font-size: ${typeScale.header5};
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
    <Lesson id={lesson.id} key={lesson.id} lesson={lesson}></Lesson>
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

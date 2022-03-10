import React from "react";
import styled from "styled-components";

const lessons = [
  {
    name: "Leccion 1",
  },
  {
    name: "Leccion 2",
  },
  {
    name: "Leccion 3",
  },
  {
    name: "Leccion 4",
  },
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
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 150px;
    height: 150px;
    background-color: ${(props) => props.theme.backgroundColor};
    border: solid ${(props) => props.theme.textColorNeutral} 2px;
    border-radius: 0.5rem;
    &:hover {
      cursor: pointer;
      box-shadow: 0 5px 16px ${(props) => props.theme.shadow};
    }
  }
`;

function Lessons() {
  return (
    <LessonsStyle>
      <div className="wrapper">
        <div className="card">
          <h1> 1 </h1>
        </div>
        <div className="card">
          <h1> 2 </h1>
        </div>
        <div className="card">
          <h1> 3 </h1>
        </div>
        <div className="card">
          <h1> 4 </h1>
        </div>
        <div className="card">
          <h1> 5 </h1>
        </div>
        <div className="card">
          <h1> 6 </h1>
        </div>
        <div className="card">
          <h1> 7 </h1>
        </div>
        <div className="card">
          <h1> 8 </h1>
        </div>
        <div className="card">
          <h1> 9 </h1>
        </div>
        <div className="card">
          <h1> 10 </h1>
        </div>
        <div className="card">
          <h1> 11 </h1>
        </div>
        <div className="card">
          <h1> 12 </h1>
        </div>
        <div className="card">
          <h1> 13 </h1>
        </div>
        <div className="card">
          <h1> 14 </h1>
        </div>
        <div className="card">
          <h1> 15 </h1>
        </div>
        <div className="card">
          <h1> 16 </h1>
        </div>
        <div className="card">
          <h1> 17 </h1>
        </div>
        <div className="card">
          <h1> 18 </h1>
        </div>
        <div className="card">
          <h1> 19 </h1>
        </div>
        <div className="card">
          <h1> 20 </h1>
        </div>
        <div className="card">
          <h1> 21 </h1>
        </div>
        <div className="card">
          <h1> 22 </h1>
        </div>
        <div className="card">
          <h1> 23 </h1>
        </div>
        <div className="card">
          <h1> 24 </h1>
        </div>
      </div>
    </LessonsStyle>
  );
}

export default Lessons;

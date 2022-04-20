import React from "react";
import styled from "styled-components";
import { typeScale } from "../utils";

const GameboardWrapper = styled.div`
  display: flex;
  gap: 30px;
  .item {
    display: flex;
    flex-direction: column;
    margin: 0px;
  }
  .title {
    font-size: ${typeScale.paragraph};
  }
  .value {
    font-size: ${typeScale.header3};
  }
`;

function GameBoard({ total, errorCounter, hits }) {
  return (
    <GameboardWrapper>
      <div className="item">
        <div className="title">Total</div>
        <div className="value">{total}</div>
      </div>
      <div className="item">
        <div className="title">Errores</div>
        <div className="value">{errorCounter}</div>
      </div>
      <div className="item">
        <div className="title">Buenas</div>
        <div className="value">{hits}</div>
      </div>
    </GameboardWrapper>
  );
}

export default GameBoard;

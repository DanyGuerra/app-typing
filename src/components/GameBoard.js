import React from "react";
import styled from "styled-components";
import { typeScale } from "../utils";

const GameboardWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;
  .item {
    font-size: ${typeScale.header2};
    display: flex;
    flex-direction: column;
    margin: 0px;
  }
`;

function GameBoard({ total, errorCounter, hits }) {
  return (
    <GameboardWrapper>
      <div className="item">
        <div>Total</div>
        <div>{total}</div>
      </div>
      <div className="item">
        <div>Errores</div>
        <div>{errorCounter}</div>
      </div>
      <div className="item">
        <div>Buenas</div>
        <div>{hits}</div>
      </div>
    </GameboardWrapper>
  );
}

export default GameBoard;

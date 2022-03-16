import React from "react";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import styled from "styled-components";

function GameControls({ isStarted, handleStart, handleRestart, isGameEnded }) {
  return (
    <div>
      {isStarted ? (
        <></>
      ) : (
        <>
          <PrimaryButton onClick={handleStart}> Iniciar</PrimaryButton>
        </>
      )}
      <SecondaryButton onClick={handleRestart}> Reiniciar </SecondaryButton>

      {isGameEnded ? <PrimaryButton>Siguiente</PrimaryButton> : <></>}
    </div>
  );
}

export default GameControls;

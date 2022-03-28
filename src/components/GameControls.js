import React from "react";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import styled from "styled-components";

const GameControlsStyle = styled.div`
  display: flex;
  gap: 10px;
`;

function GameControls({
  isStarted,
  handleStart,
  handleRestart,
  isGameEnded,
  handleSwPause,
  swResume,
  swPaused,
}) {
  const ConditionalRendering = () => {
    if (isGameEnded) {
      return (
        <>
          <SecondaryButton onClick={handleRestart}> Reiniciar </SecondaryButton>
          <PrimaryButton>Siguiente</PrimaryButton>
        </>
      );
    }
    if (isStarted) {
      return (
        <>
          {swPaused ? (
            <PrimaryButton onClick={swResume}>Resume </PrimaryButton>
          ) : (
            <PrimaryButton onClick={handleSwPause}>Pause </PrimaryButton>
          )}
          <SecondaryButton onClick={handleRestart}> Reiniciar </SecondaryButton>
        </>
      );
    } else {
      return (
        <>
          <PrimaryButton onClick={handleStart}> Iniciar</PrimaryButton>
        </>
      );
    }
  };

  return <GameControlsStyle>{ConditionalRendering()}</GameControlsStyle>;
}

export default GameControls;

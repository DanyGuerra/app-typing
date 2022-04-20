import React from "react";
import styled from "styled-components";

const WrapperNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
`;

function NotFound() {
  return (
    <WrapperNotFound>
      <h1>Página no encontrada</h1>
    </WrapperNotFound>
  );
}

export default NotFound;

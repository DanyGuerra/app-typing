import React from "react";
import styled from "styled-components";
import { typeScale } from "../utils";
import { PrimaryButton } from "./Buttons";
import { Illustrations, CloseIcon } from "../assets";

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.formElementBackground};
  color: ${(props) => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
  background: ${(props) => props.theme.formElementBackground};
  position: relative;
`;

const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  top: 40px;
  right: 40px;
  width: 38px;
  height: 38px;
  padding: 0;
`;
const SignUpModal = () => {
  return (
    <ModalWrapper>
      <img src={Illustrations.SignUp} alt="Sign up for an account!" />
      <SignUpHeader>Registrate</SignUpHeader>
      <SignUpText>Registrate para poder guardar tu progreso!</SignUpText>
      <PrimaryButton onClick={() => console.log("You signed up!")}>
        Registrarse
      </PrimaryButton>
      <CloseModalButton aria-label="Close Modal">
        <CloseIcon />
      </CloseModalButton>
    </ModalWrapper>
  );
};

export default SignUpModal;

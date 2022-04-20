import styled from "styled-components";
import { typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
  `,
  warning: () => `
    background-color: ${(props) => props.theme.status.warningColor};
    color: ${(props) => props.theme.textColorInverted};

    &:hover, &:focus {
      background-color: ${(props) => props.theme.status.warningColorHover};
      outline: 3px solid ${(props) => props.theme.status.warningColorHover};
      outline-offset: 2px;
    }

    &:active {
      background-color: ${(props) => props.theme.status.warningColorActive};
    }
  `,
  error: () => `
  background-color: ${(props) => props.theme.status.errorColor};
  color: ${(props) => props.theme.textColorInverted};

  &:hover {
    background-color: ${(props) => props.theme.status.errorColorHover};
  }

  &:active {
    background-color: ${(props) => props.theme.status.errorColorActive};
  }
  `,
  success: () => `
  background-color: ${(props) => props.theme.status.successColor};
  color: ${(props) => props.theme.textColorInverted};

  &:hover {
    background-color: ${(props) => props.theme.status.successColorHover};
  }

  &:active {
    background-color: ${(props) => props.theme.status.successColorActive};
  }
  `,
};

const Button = styled.button`
  padding: 8px 12px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${(props) => props.theme.primaryFont};
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${(props) => props.theme.primaryHoverColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${(props) => props.theme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${(props) => props.theme.primaryActiveColor};
    border-color: ${(props) => props.theme.primaryActiveColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  border: 2px solid transparent;
  color: ${(props) => props.theme.textColorOnPrimary};

  &:disabled {
    background-color: ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.textOnDisabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  border: 2px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.primaryColor};
  background: none;

  &:disabled {
    background: none;
    border: 2px solid ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  border: 2px solid transparent;
  color: ${(props) => props.theme.primaryColor};
  background: none;

  &:disabled {
    color: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SwitchButton = ({ setUseDarkTheme, useDarkTheme }) => {
  return (
    <Switch>
      <Input type="checkbox" checked={useDarkTheme} />
      <Slider
        onClick={() => {
          setUseDarkTheme(!useDarkTheme);
          localStorage.setItem("darkState", !useDarkTheme);
        }}
      ></Slider>
    </Switch>
  );
};

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.toggleBackground};
  border-radius: 15px;
  transition: 0.4s;

  &:before {
    content: "";

    position: absolute;
    left: 2px;
    bottom: 2px;

    width: 20px;
    height: 20px;
    border-radius: 100%;

    background-color: ${(props) => props.theme.toggle};

    transition: 0.4s;
  }
`;

const Input = styled.input`
  &:checked + ${Slider}:before {
    transform: translateX(23.4px);
  }
`;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  background-color: none;
  border-radius: 15px;
  transition: 0.4s;

  & ${Input} {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

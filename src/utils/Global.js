import { primaryFont } from "./typography";
import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
${normalize()}
html {
  box-sizing: border-box;
  font-size: 16px;
  background-color:${(props) => props.theme.backgroundColor};
  color:${(props) => props.theme.textColor}
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  margin: 0;
  font-family: ${primaryFont};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a{
  color:${(props) => props.theme.textColor}
}

main {
  width: 90%;
  margin: 0 auto;
}
`;

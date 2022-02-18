import React from "react";
import TypingPlay from "./TypingPlay";
import Header from "./Header";
import Footer from "./Footer";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "./Buttons";
import { GlobalStyle } from "../utils";
import { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "../utils";

function App() {
  const [welTextFinished, setWelTextFinished] = React.useState(false);
  const [useDarkTheme, setUseDarkTheme] = React.useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <GlobalStyle />
      <Header setUseDarkTheme={setUseDarkTheme} />
      <TypingPlay
        welTextFinished={welTextFinished}
        setWelTextFinished={setWelTextFinished}
      />
      <PrimaryButton>Click Here</PrimaryButton>
      <SecondaryButton>Click Here</SecondaryButton>
      <TertiaryButton>Click Here</TertiaryButton>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

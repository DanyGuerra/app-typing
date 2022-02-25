import React from "react";
import TypingPlay from "./TypingPlay";
import Header from "./Header";
import Footer from "./Footer";
import { GlobalStyle } from "../utils";
import { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "../utils";
import SignUpModal from "./Modal";

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
      <SignUpModal></SignUpModal>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "../utils";
import { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "../utils";
import Home from "./Home";
import Lessons from "./Lessons";
import NotFound from "./NotFound";
import TypingGame from "./TypingGame";
// import SignUpModal from "./Modal";

function App() {
  const [welTextFinished, setWelTextFinished] = React.useState(false);
  const [useDarkTheme, setUseDarkTheme] = React.useState(false);

  return (
    <Router>
      <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
        <GlobalStyle />
        <Header setUseDarkTheme={setUseDarkTheme} useDarkTheme={useDarkTheme} />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                welTextFinished={welTextFinished}
                setWelTextFinished={setWelTextFinished}
              />
            }
          />

          <Route path="lessons" element={<Lessons />}></Route>
          <Route path="lessons/:id" element={<TypingGame />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;

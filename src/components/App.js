import "../styles/App.scss";
import React from "react";
import TypingPlay from "./TypingPlay";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [welTextFinished, setWelTextFinished] = React.useState(false);

  return (
    <>
      <Header />
      <TypingPlay
        welTextFinished={welTextFinished}
        setWelTextFinished={setWelTextFinished}
      />
      <Footer />
    </>
  );
}

export default App;

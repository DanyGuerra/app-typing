import React from "react";
import TypingPlay from "./TypingPlay";
import Header from "./Header";
import Footer from "./Footer";
import PrimaryButton, { SecondaryButton, TertiaryButton } from "./Buttons";

function App() {
  const [welTextFinished, setWelTextFinished] = React.useState(false);

  return (
    <>
      <Header />
      <TypingPlay
        welTextFinished={welTextFinished}
        setWelTextFinished={setWelTextFinished}
      />
      <PrimaryButton>Click Here</PrimaryButton>
      <SecondaryButton>Click Here</SecondaryButton>
      <TertiaryButton>Click Here</TertiaryButton>
      <Footer />
    </>
  );
}

export default App;

import TypingPlay from "./TypingPlay";

function Home({ welTextFinished, setWelTextFinished }) {
  return (
    <TypingPlay
      welTextFinished={welTextFinished}
      setWelTextFinished={setWelTextFinished}
    />
  );
}

export default Home;

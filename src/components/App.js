import "../styles/App.scss";
import Keyboard from "./Keyboard";
import TextBox from "./TextBox";

function App() {
  return (
    <>
      <TextBox />
      <Keyboard colorKeyActived={"#502888"} colorTextActived={"#fffbfe"} />
    </>
  );
}

export default App;

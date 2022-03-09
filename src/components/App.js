import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "../utils";
import { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "../utils";
import Home from "./Home";
import Lessons from "./Lessons";
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

          <Route path="lessons" element={<Lessons />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>

    //  <Router>
    //       <Header />
    //         <Route exact path="/" component={Home} />
    //         <Route path="/agregar-celular" component={RegistrarCelular} />
    //         <Route path="/todos-los-celulares" component={CelularesList} />
    //         <Route path="/marca/:marca" component={FiltroMarca} />
    //         <Route path="/so/:so" component={FiltroSO} />
    //         <Route path="/ram/:ram" component={FiltroRam} />
    //         <Route
    //           path="/details/:id"
    //           render={(props) => <CelularDetalle {...props} />}
    //         />
    //         <Route
    //             path="/modificarcelular/:id"
    //             render={(props) => <ModificarCelular {...props} />}
    //         />
    //         <Route path="*" component={NotFound} />
    //     </Router>
  );
}

export default App;

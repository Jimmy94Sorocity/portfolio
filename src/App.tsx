import { ThemeProvider } from "styled-components";

import Sobre from "./containers/About";
import Projetos from "./containers/Projects";
import SideBar from "./containers/SideBar";
import EstiloGlobal, { Container } from "./styles";
import temaLight from "./themes/light";
import temaDark from "./themes/dark";
import { useState } from "react";

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false);

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark);
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <SideBar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;

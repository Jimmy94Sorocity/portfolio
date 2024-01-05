import Sobre from "./containers/About";
import Projetos from "./containers/Projects";
import SideBar from "./containers/SideBar";
import EstiloGlobal, { Container } from "./styles";

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <SideBar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  );
}

export default App;

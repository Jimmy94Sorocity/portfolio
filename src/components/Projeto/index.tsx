import Paragrafo from "../Paragrafo";
import Titulo from "../Title";

import { Card, LinkBotao } from "./style";

const Projeto = () => (
  <Card>
    <Titulo>Projeto lista de Tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com o VueJS</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
);

export default Projeto;

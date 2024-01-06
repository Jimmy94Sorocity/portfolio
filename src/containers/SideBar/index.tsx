import Avatar from "../../components/Avatar";
import Paragrafo from "../../components/Paragrafo";
import Titulo from "../../components/Title";

import { Descricao, BotaoTema, SidebarContainer } from "./styles";

const SideBar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Matheus Fré</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Jimmy94Sorocity
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Front-end
      </Descricao>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
);

export default SideBar;

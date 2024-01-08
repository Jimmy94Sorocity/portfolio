import Avatar from "../../components/Avatar";
import Paragrafo from "../../components/Paragrafo";
import Titulo from "../../components/Title";

import { Descricao, BotaoTema, SidebarContainer } from "./styles";

type Props = {
  trocaTema: () => void;
};

const SideBar = (props: Props) => (
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
      <BotaoTema onClick={props.trocaTema}>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
);

export default SideBar;

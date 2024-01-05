import Titulo from "../../components/Title";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis labore
      dignissimos voluptatibus consectetur blanditiis. Rem dolor id fuga est
      quasi fugiat quam, adipisci culpa laborum necessitatibus voluptas
      asperiores saepe ab.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=Jimmy94Sorocity&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Jimmy94Sorocity&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
);

export default Sobre;

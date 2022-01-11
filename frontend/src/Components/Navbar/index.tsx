import * as S from "./styles";
import { AiOutlineGithub } from "react-icons/ai";

export const Navbar = () => {
  return (
    <S.Container>
      <h1>DSMovie</h1>

      <S.Github>
        <AiOutlineGithub size="2rem"/>
        <a href="https://github.com/devsuperior/sds-dsmovie">/devsuperior</a>
      </S.Github>
    </S.Container>
  );
};

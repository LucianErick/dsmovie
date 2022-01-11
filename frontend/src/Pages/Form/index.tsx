import { Link } from "react-router-dom";
import * as S from "./styles";

const movie = {
  id: 1,
  image:
    "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
  title: "The Witcher",
  count: 2,
  score: 4.5,
};

export const Form = () => {
  return (
    <S.Container>
      <S.InfoContainer>
        <img src={movie.image} alt={movie.title} />
        <h3>{movie.title}</h3>
        <S.FormContainer>
          <S.FormGroup>
            <label htmlFor="email">Informe seu email</label>
            <input type="email" className="form-control" id="email" />
          </S.FormGroup>
          <S.FormGroup>
            <label htmlFor="score">Informe sua avaliação</label>
            <select className="form-control" id="score">
              <option selected disabled hidden>
                Selecione um valor
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </S.FormGroup>
          <S.ButtonsContainer>
            <Link to="/">
              <button>
                Cancelar
              </button>
            </Link>
            <button type="submit">Salvar</button>
          </S.ButtonsContainer>
        </S.FormContainer>
      </S.InfoContainer>
    </S.Container>
  );
};

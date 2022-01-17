import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovieById } from "../../Services/api";
import { Movie } from "../../Types/movie";
import * as S from "./styles";

type Props = {
  movieId: string;
};

export const FormCard = ({ movieId }: Props) => {
  const [movie, setMovie] = useState<Movie>({
    id: 0,
    title: "",
    score: 0.0,
    count: 0,
    image: "",
  });

  useEffect(() => {
    const loadData = async () => {
      const movieData = await getMovieById(movieId);
      setMovie(movieData);
      console.log(movieData);
    };

    loadData();
  }, [movieId]);

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
              <button>Cancelar</button>
            </Link>
            <button type="submit">Salvar</button>
          </S.ButtonsContainer>
        </S.FormContainer>
      </S.InfoContainer>
    </S.Container>
  );
};

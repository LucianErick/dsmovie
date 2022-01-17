import { SyntheticEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getMovieById, saveScore } from "../../Services/api";
import { Movie } from "../../Types/movie";
import { validateEmail } from "../../utils";
import * as S from "./styles";

type Props = {
  movieId: string;
};

export const FormCard = ({ movieId }: Props) => {
  const navigate = useNavigate();

  const [movie, setMovie] = useState<Movie>({
    id: 0,
    title: "",
    score: 0.0,
    count: 0,
    image: "",
  });

  const saveAndRedirect = async (email: string, score: number) => {
    await saveScore(movieId, email, score);
    navigate("/");
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as any;

    const email = form.email.value;
    const score = form.score.value;

    validateEmail(email) && score != "Selecione um valor"
      ? saveAndRedirect(email, score)
      : alert("Insira os dados corretamente.");
  };

  useEffect(() => {
    const loadData = async () => {
      const movieData = await getMovieById(movieId);
      setMovie(movieData);
    };

    loadData();
  }, [movieId]);

  return (
    <S.Container>
      <S.InfoContainer>
        <img src={movie.image} alt={movie.title} />
        <h3>{movie.title}</h3>
        <S.FormContainer onSubmit={handleSubmit}>
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

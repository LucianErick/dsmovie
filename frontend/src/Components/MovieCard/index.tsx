import { Movie } from "../../Types/movie";
import { MovieScore } from "../MovieScore";
import * as S from "./styles";

type Props = {
  movie: Movie;
};

export const MovieCard = ({ movie }: Props) => {
  return (
    <S.Container>
      <img src={movie.image} alt={movie.title} />
      <S.Title>{movie.title}</S.Title>
      <MovieScore score={movie.score} count={movie.count} id={movie.id} />
    </S.Container>
  );
};

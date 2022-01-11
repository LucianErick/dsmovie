import { Link } from "react-router-dom";
import { MovieStars } from "../MovieStars";
import * as S from "./styles";

type Props = {
  movie: {
    id: number;
    image: string;
    title: string;
    count: number;
    score: number;
  };
};

export const MovieScore = ({ movie }: Props) => {
  return (
    <S.Container>
      <S.Score>{movie.score}</S.Score>
      <MovieStars />
      <S.Ratings>{movie.count} avaliações</S.Ratings>
      <S.Button>
        <Link to={`/form/${movie.id}`}>
          <button>Avaliar</button>
        </Link>
      </S.Button>
    </S.Container>
  );
};

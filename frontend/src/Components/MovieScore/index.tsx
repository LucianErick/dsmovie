import { Link } from "react-router-dom";
import { MovieStars } from "../MovieStars";
import * as S from "./styles";

type Props = {
  id: string | number,
  score: number,
  count: number,
};

export const MovieScore = ({ id, score, count }: Props) => {
  return (
    <S.Container>
      <S.Score>{score}</S.Score>
      <MovieStars score={score} />
      <S.Ratings>{count} avaliações</S.Ratings>
      <S.Button>
        <Link to={`/form/${id}`}>
          <button>Avaliar</button>
        </Link>
      </S.Button>
    </S.Container>
  );
};

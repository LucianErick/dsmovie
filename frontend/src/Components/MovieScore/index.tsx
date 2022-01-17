import { Link } from "react-router-dom";
import { MovieStars } from "../MovieStars";
import * as S from "./styles";

type Props = {
  id: string | number;
  score: number;
  count: number;
};

export const MovieScore = ({ id, score, count }: Props) => {
  return (
    <S.Container>
      <S.Score>{parseFloat(score.toFixed(1))}</S.Score>
      <MovieStars score={parseFloat(score.toFixed(2))} />
      <S.Ratings>{count} avaliações</S.Ratings>
      <S.Button>
        <Link to={`/form/${id}`}>
          <button>Avaliar</button>
        </Link>
      </S.Button>
    </S.Container>
  );
};

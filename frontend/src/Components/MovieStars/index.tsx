import { Star } from "../Star";
import * as S from "./styles";

type Props = {
  score: number;
};

export const MovieStars = ({ score }: Props) => {
  function getFills(score: number) {
    const fills = [0, 0, 0, 0, 0];

    const integerPart = Math.floor(score);

    for (let i = 0; i < integerPart; i++) {
      fills[i] = 1;
    }

    const diff = score - integerPart;
    if (diff > 0) {
      fills[integerPart] = 0.5;
    }

    return fills;
  }

  const fills = getFills(score);

  return (
    <S.Container>
      <Star value={fills[0]} />
      <Star value={fills[1]} />
      <Star value={fills[2]} />
      <Star value={fills[3]} />
      <Star value={fills[4]} />
    </S.Container>
  );
};

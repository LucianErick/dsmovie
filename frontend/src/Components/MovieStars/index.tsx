import * as S from "./styles";

import {
  BsStarFill as FullStar,
  BsStarHalf as HalfStar,
  BsStar as NoneStar,
} from "react-icons/bs";

export const MovieStars = () => {
  return (
    <S.Container>
      <FullStar />
      <FullStar />
      <FullStar />
      <HalfStar />
      <NoneStar />
    </S.Container>
  );
};

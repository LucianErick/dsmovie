import {
  BsArrowRightShort as ArrowRight,
  BsArrowLeftShort as ArrowLeft,
} from "react-icons/bs";

import * as S from "./styles";

export const Pagination = () => {
  return (
    <S.Container>
      <S.Box>
        <button disabled={true}>
          <ArrowLeft size="1.5rem" color="#4d41c0" />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button disabled={false}>
          <ArrowRight size="1.5rem" color="#4d41c0" />
        </button>
      </S.Box>
    </S.Container>
  );
};

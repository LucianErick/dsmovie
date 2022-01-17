import {
  BsArrowRightShort as ArrowRight,
  BsArrowLeftShort as ArrowLeft,
} from "react-icons/bs";
import { MoviePage } from "../../Types/moviePage";

import * as S from "./styles";

type Props = {
  page: MoviePage;
  onChange: Function;
};

export const Pagination = ({ onChange, page }: Props) => {
  let currentPage = page.number;
  return (
    <S.Container>
      <S.Box>
        <button disabled={page.first} onClick={() => onChange(--currentPage)}>
          <ArrowLeft size="1.5rem" color="#4d41c0" />
        </button>
        <p>{`${currentPage + 1} de ${page.totalPages}`}</p>
        <button disabled={page.last} onClick={() => onChange(++currentPage)}>
          <ArrowRight size="1.5rem" color="#4d41c0" />
        </button>
      </S.Box>
    </S.Container>
  );
};

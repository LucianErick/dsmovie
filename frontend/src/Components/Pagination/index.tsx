import {
  BsArrowRightShort as ArrowRight,
  BsArrowLeftShort as ArrowLeft,
} from "react-icons/bs";

import * as S from "./styles";

type Props = {
  currentPage: number;
  totalPages: number;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  setPageHandle: (page: number) => void;
};

export const Pagination = ({
  currentPage,
  totalPages,
  setPageHandle,
}: Props) => {
  const handleNextPage = () => {
    setPageHandle(++currentPage);
  };

  const handlePreviousPage = () => {
    setPageHandle(--currentPage);
  };

  return (
    <S.Container>
      <S.Box>
        <button
          disabled={currentPage === 0 ? true : false}
          onClick={handlePreviousPage}
        >
          <ArrowLeft size="1.5rem" color="#4d41c0" />
        </button>
        <p>{`${currentPage + 1} de ${totalPages}`}</p>
        <button
          disabled={currentPage + 1 === totalPages ? true : false}
          onClick={handleNextPage}
        >
          <ArrowRight size="1.5rem" color="#4d41c0" />
        </button>
      </S.Box>
    </S.Container>
  );
};

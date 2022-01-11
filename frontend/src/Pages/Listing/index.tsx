import { MovieCard } from "../../Components/MovieCard";
import { Pagination } from "../../Components/Pagination";
import * as S from "./styles";

export const Listing = () => {
  return (
    <>
      <Pagination />
      <S.Container>
        <S.GridContainer>
          <S.GridItem>
            <MovieCard />
          </S.GridItem>
          <S.GridItem>
            <MovieCard />
          </S.GridItem>
          <S.GridItem>
            <MovieCard />
          </S.GridItem>
          <S.GridItem>
            <MovieCard />
          </S.GridItem>
          <S.GridItem>
            <MovieCard />
          </S.GridItem>
        </S.GridContainer>
      </S.Container>
    </>
  );
};

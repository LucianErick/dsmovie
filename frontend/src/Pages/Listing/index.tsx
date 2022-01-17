import { useEffect, useState } from "react";
import { MovieCard } from "../../Components/MovieCard";
import { Pagination } from "../../Components/Pagination";
import { getAllMovies } from "../../Services/api";
import { Movie } from "../../Types/movie";
import { MoviePage } from "../../Types/moviePage";
import * as S from "./styles";

export const Listing = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: pageSize,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  useEffect(() => {
    const loadAll = async () => {
      const list = await getAllMovies(pageNumber, pageSize);
      setPage(list);
      console.log(list);
    };

    loadAll();
  }, [pageNumber]);

  return (
    <>
      <Pagination
        currentPage={pageNumber}
        totalPages={page ? page.totalPages : 0}
        handleNextPage={() => {}}
        handlePreviousPage={() => {}}
        setPageHandle={setPageNumber}
      />
      <S.Container>
        <S.GridContainer>
          {page?.content.map((movie, index, array) => {
            return (
              <S.GridItem key={index}>
                <MovieCard movie={movie} />
              </S.GridItem>
            );
          })}
        </S.GridContainer>
      </S.Container>
    </>
  );
};

import { MovieScore } from "../MovieScore";
import { MovieStars } from "../MovieStars";
import * as S from "./styles";

const movie = {
  id: 1,
  image:
    "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
  title: "The Witcher",
  count: 2,
  score: 4.5,
};

export const MovieCard = () => {
  return (
    <S.Container>
      <img src={movie.image} />
      <S.Title>{movie.title}</S.Title>
      <MovieScore movie={movie} />
    </S.Container>
  );
};

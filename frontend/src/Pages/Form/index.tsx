import { useParams } from "react-router-dom";
import { FormCard } from "../../Components/FormCard";

import * as S from "./styles";

export const Form = () => {
  const params = useParams();

  return (
    <S.Container>
      <FormCard movieId={`${params.movieId}`} />
    </S.Container>
  );
};

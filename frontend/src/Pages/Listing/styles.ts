import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  padding: 1.5rem;
`;

export const GridContainer = styled.div`
  width: 100%;
  max-width: 800px;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 30px;

  @media (max-width: 840px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

export const GridItem = styled.div`
  display: flex;
  justify-content: center;
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding-bottom: 1.5rem;
  border-radius: 12px;
  cursor: pointer;

  @media (max-width: 840px) {
    width: 260px;
  }

  @media (max-width: 580px) {
    width: 280px;
  }

  img {
    width: 100%;
    border-radius: 12px 12px 0 0;
  }
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 1.05rem;
  color: #444;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  padding: 0.5rem 0.75rem;
`;

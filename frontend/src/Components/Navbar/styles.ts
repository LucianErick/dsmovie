import styled from "styled-components";

export const Container = styled.div`
  background-color: #4d41c0;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  color: #fff;

  h1 {
    font-weight: 400;
    font-size: 1.5rem;
  }
`;

export const Github = styled.div`
  display: flex;
  align-items: center;
  
  a {
    margin-left: 0.5rem;
    font-size: 0.85rem;
    color: #fff;
    font-weight: 400;
    transition: all ease .15s;
    &:hover {
      color: #ccc;
    }
  }
`;

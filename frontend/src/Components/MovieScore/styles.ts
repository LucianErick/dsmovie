import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Score = styled.p`
  margin-bottom: 0.25rem;
  width: 100%;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 500;
  color: #ffbb3a;
`;

export const Ratings = styled.p`
  margin-top: 0.5rem;
  font-size: 0.7rem;
  color: #aaa;
`;
export const Button = styled.div`
  margin-top: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  a {
    display: flex;
    background-color: #4d41c0;
    cursor: pointer;
    width: 80%;
    padding: 0.75rem 0;
    outline: none;
    
    border-radius: 4px;
    
    transition: all ease 0.15s;
    font-weight: 600;

    button {
      color: #fff;
      width: 100%;
      background: none;
      border: 0;
      cursor: pointer;
      font-weight: 600;
      letter-spacing: 0.05rem;
    }

    &:hover {
      background-color: #3c30b0;
    }
  }
`;

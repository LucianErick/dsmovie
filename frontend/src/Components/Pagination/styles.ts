import styled from "styled-components";

export const Container = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: center;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  p {
    color: #333;
    font-weight: 300;
    padding: 0 1rem;
    font-size: 0.85rem;
  }

  button {
    display: flex;
    border: 0;
    outline: none;
    justify-content: center;
    align-items: center;
    padding: 6px;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid #ccc;
    transition: all ease 0.1s;
  }

  button:disabled {
    border: 1px solid #ccc;
    cursor: unset;
    
    svg {
        fill: #aaa;
    }

  }
`;

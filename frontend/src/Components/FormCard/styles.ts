import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  margin-top: 0.75rem;
  align-items: center;
`;

export const InfoContainer = styled.div`
  background-color: #fff;
  max-width: 480px;
  border-radius: 8px;

  img {
    width: 100%;
    border-radius: 8px 8px 0 0;
  }

  h3 {
    text-align: center;
    font-weight: 400;
    font-size: 1.15rem;
    text-align: center;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  label {
    font-size: 0.725rem;
    margin-bottom: 0.25rem;
    color: #444;
    letter-spacing: 0.045em;

    &:hover {
      cursor: pointer;
    }
  }

  input {
    margin-bottom: 1rem;
  }

  select,
  input {
    height: 40px;
    outline: none;
    padding-left: 0.5rem;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #888;
  }
`;

export const ButtonsContainer = styled.div`
  margin: 1.75rem 0 1rem 0;
  display: flex;
  justify-content: space-evenly;

  button {
    border: 0;
  }

  a > button {
    padding: 0.35rem;
    cursor: pointer;
    background: none;
    font-weight: 500;
    transition: all ease 0.15s;

    &:hover {
      background: none;
      color: #222;
    }
  }

  button:not(a > button) {
    width: 45%;
    padding: 0.85rem 0;
    background-color: #4d41c0;
    color: #fff;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    transition: all ease 0.15s;

    &:hover {
      background-color: #3c30b0;
    }
  }
`;

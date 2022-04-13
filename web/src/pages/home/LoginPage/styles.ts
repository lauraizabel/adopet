import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 65% 35%;

  @media (max-width: 768px) {
    grid-template-columns: 55% 45%;
  }
  @media (max-width: 480px) {
    grid-template-columns: 35% 65%;
  }
  @media (max-width: 320px) {
    grid-template-columns: 30% 70%;
  }
`;

export const LeftSection = styled.div`
  width: 100%;
  height: 100%;
  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`;

export const RightSection = styled.div`
  width: 90%;
  margin: auto auto;
  h1 {
    text-align: center;
  }
`;

export const ContainerForm = styled.div`
  input {
    width: 100%;
    padding: 8px 16px;
    outline: none;
    border-radius: 8px;
    border: solid 1px gray;
  }
  p {
    font-size: 18px;
    margin: 8px 0;
  }
  .typeError {
    color: red;
    font-size: 14px;
  }
  .password {
    color: #333;
    text-decoration: underline;
    font-size: 16px;
  }

  .password:hover {
    color: black;
    transition: 0.2s;
  }
`;

import styled from "styled-components";
import assets from "./assets.svg";

export const Container = styled.div`
  width: 70%;
  margin: 7vh auto;
  padding: 50px;
  box-sizing: content-box;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  @media (min-width: 768px) {
    max-width: 800px;
    height: 350px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
`;

export const LeftSection = styled.div`
  height: 100%;

  > h1 {
    font-weight: 500;
    margin-top: 40px;
    margin-bottom: 20px;
  }
  > h2 {
    font-weight: normal;
    color: #737380;
    font-size: 18px;
    line-height: 28px;
  }
  > div a {
    margin-top: 20px;
    display: flex;
    align-items: center;
  }
  > div a svg {
    margin-right: 5px;
    color: #a85252;
    width: 16px;
    height: 16px;
  }

  @media (max-width: 768px) {
    > div {
      display: none;
    }
  }
`;
export const RightSection = styled.form`
  display: flex;
  flex-direction: column;
  > input {
    margin-top: 8px;
    border-radius: 8px;
    border: 1px solid #dcdce5;
    padding: 16px;
    font-size: 16px;
    outline: none;
  }
  > div a {
    margin-top: 20px;
    display: flex;
    align-items: center;
  }
  > div a svg {
    margin-right: 5px;
    color: #a85252;
    width: 16px;
    height: 16px;
  }
  .input-group select {
    margin-top: 8px;
    border-radius: 8px;
    border: 1px solid #dcdce5;
    color: ##dcdce5;
    padding: 16px;
    font-size: 16px;
    outline: none;
  }
  .input-group {
    display: grid;
    grid-template-columns: 65% 30%;
    gap: 18px;
  }
  .button {
    margin-bottom: 10px;
  }

  @media (min-width: 768px) {
    > div a {
      display: none;
    }
  }
`;

import styled from "styled-components";
import assets from "./assets.svg";

export const Container = styled.div`
  width: 70%;
  max-width: 800px;
  height: 350px;
  margin: 20vh auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
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
`;
export const RightSection = styled.div`
  height: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

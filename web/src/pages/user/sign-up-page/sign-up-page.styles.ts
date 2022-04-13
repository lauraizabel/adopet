import styled from "styled-components";
import BgImage from "../../../assets/images/bg_register_pets.jpg";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${BgImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Container = styled.div`
  background-color: #f0f0f5;
  width: 70%;
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
export const RightSection = styled.div``;

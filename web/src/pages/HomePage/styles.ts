import styled from "styled-components";
import bg from "./bg.svg";

export const Container = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: 50px right;
  background-size: auto;
  height: 100vh;
`;

export const Header = styled.header`
  width: 90%;
  max-width: 1100px;
  height: 150px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
  }
  > div a h1 {
    text-decoration: none;
    margin-left: 20px;
    font-size: 24px;
    font-weight: 500;
  }
`;

export const ContentText = styled.div``;

import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  overflow-y: none;
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

  .login {
    text-decoration: none;
    margin-left: 20px;
    font-size: 24px;
    font-weight: 500;
    border: 0;
    cursor: pointer;
    @media (max-width: 680px) {
      font-size: 24px;
    }
  }
`;

export const ContentText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: "Patrick Hand";
  overflow: none;
  > div {
    top: 200px;
    position: absolute;
    right: 0;
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    > h1 {
      font-size: 48px;
    }
    > h2 {
      font-size: 32px;
      margin-top: 20px;
      margin-bottom: 20px;

      color: #a85252;
      text-align: center;
    }
    > div {
      margin-top: 25px;
    }
  }
  > img {
    margin-left: 40px;
    width: 700px;
  }

  @media (max-width: 900px) {
    > img {
      margin-left: 20px;

      width: 600px;
    }
    > div {
      > h1 {
        font-size: 36px;
      }
      > h2 {
        font-size: 24px;
        margin-top: 20px;
        margin-bottom: 20px;

        color: #a85252;
        text-align: center;
      }
      > div {
        margin-top: 25px;
      }
    }
  }

  @media (max-width: 680px) {
    flex-direction: column;
    > img {
      bottom: 20px;
      width: 90%;
      position: relative;
    }

    > div {
      top: 0;
      position: relative;
      display: flex;
      width: 100%;
      text-align: center;
      > h1 {
        font-size: 36px;
      }
      > h2 {
        font-size: 24px;
        margin-top: 20px;
        margin-bottom: 20px;

        color: #a85252;
        text-align: center;
      }
      > div {
        margin-top: 25px;
      }
    }
  }
`;

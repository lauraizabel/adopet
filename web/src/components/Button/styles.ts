import styled from "styled-components";

export const Container = styled.div`
  > button {
    background: #a85252;
    color: white;
    font-family: "Roboto";
    font-size: 18px;
    font-weight: bold;
    padding: 20px 40px;
    border-radius: 8px;
    width: 100%;
    border: none;
    cursor: pointer;
  }
  > button:hover {
    background: #974e4e;
    transition: 0.2s;
  }

  @media (max-width: 900px) {
    > button {
      font-size: 14px;
      padding: 16px 40px;
    }
  }

  @media (max-width: 360px) {
    > button {
      font-size: 14px;
      padding: 16px 20px;
    }
  }
`;

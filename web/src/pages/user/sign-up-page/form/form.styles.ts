import styled from "styled-components";

export const Container = styled.form`
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
    color: #dcdce5;
    padding: 16px;
    font-size: 16px;
    outline: none;
  }
  .input-group {
    display: grid;
    grid-template-columns: 30% 65%;
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

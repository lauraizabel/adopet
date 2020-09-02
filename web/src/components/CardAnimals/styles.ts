import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 50% 50%;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);

  .content {
    display: flex;
    flex-direction: column;
  }

  .content p {
    margin-bottom: 10px;
    line-height: 24px;
    font-size: 18px;
    color: #737380;
  }
  .content h4 {
    color: #41414d;
    margin-bottom: 10px;
  }

  .content span {
    background-color: #a85252;
    color: white;
    border-radius: 8px;
    padding: 5px;
    margin-right: 5px;
  }
`;

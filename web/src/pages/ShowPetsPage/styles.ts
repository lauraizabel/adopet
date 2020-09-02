import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 1100px;
  margin: 25px auto;

  > h1 {
    margin-top: 60px;
    margin-bottom: 30px;
  }
`;

export const Header = styled.header`
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

    @media (max-width: 680px) {
      font-size: 24px;
    }
  }
`;

export const GridAnimals = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

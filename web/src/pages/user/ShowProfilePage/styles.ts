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
  > div {
    display: flex;
    align-items: center;
  }
  > div h4 {
    margin-left: 20px;
    font-weight: normal;
    font-size: 20pz;
  }
  > div a svg {
    margin-left: 20px;
    border: 2px solid #dcdce5;
    border-radius: 8px;
    padding: 10px;
  }
  > div a svg:hover {
    color: #974e4e;
    transition: 0.2s;
  }
`;

export const GridCards = styled.div`
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
`;

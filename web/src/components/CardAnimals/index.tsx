import React from "react";
import { Container } from "./styles";

const CardRegisterAnimals: React.FC = () => {
  return (
    <Container>
      <div className="content">
        <div>
          <h4>Animal:</h4>
          <p>Cachorro</p>
        </div>

        <div>
          <h4>Nome:</h4>
          <p>Mel</p>
        </div>

        <div>
          <h4>Idade aproximada:</h4>
          <p>6 meses</p>
        </div>

        <div>
          <h4>Caracteristicas:</h4>
          <span>Alegre</span>
          <span>Brincalhão</span>
        </div>
      </div>
      <div className="image">
        <img src="https://via.placeholder.com/200x200" alt="" />
      </div>
    </Container>
  );
};

export default CardRegisterAnimals;

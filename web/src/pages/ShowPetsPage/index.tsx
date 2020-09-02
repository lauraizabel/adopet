import React from "react";

import { Container, Header, GridAnimals } from "./styles";

import Logo from "../../components/Logo";
import CardAnimals from "../../components/CardAnimals";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const ShowPetsPage: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo />
        <div>
          <Link to="/cadastrar">
            <Button title="Cadastrar" />
          </Link>
          <Link to="/cadastrar">
            <h1>Login</h1>
          </Link>
        </div>
      </Header>

      <h1>Animais Cadastrados</h1>

      <GridAnimals>
        <CardAnimals />
        <CardAnimals />
        <CardAnimals />
        <CardAnimals />
        <CardAnimals />
      </GridAnimals>
    </Container>
  );
};

export default ShowPetsPage;

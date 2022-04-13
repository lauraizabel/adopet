import React from "react";
import { FiPower } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container, Header, GridCards } from "./styles";
import Logo from "../../../components/Logo";
import Button from "../../../components/Button";
import CardRegisterAnimals from "../../../components/CardRegisterAnimals";

const ShowProfilePage: React.FC = () => {
  return (
    <Container>
      <Header>
        <div>
          <Logo />
          <h4>Bem vinda, Laura</h4>
        </div>
        <div>
          <Link to="/perfil/:id/cadastrar-pet">
            <Button title="Cadastrar Novo Animal" />
          </Link>

          <Link to="/">
            <FiPower size={52} color={"a85252"} />
          </Link>
        </div>
      </Header>

      <h1>Animais Cadastrados</h1>

      <GridCards>
        <CardRegisterAnimals />
        <CardRegisterAnimals />
      </GridCards>
    </Container>
  );
};

export default ShowProfilePage;

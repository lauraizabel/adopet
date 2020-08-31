import React from "react";

import { Container, ContentText, Header } from "./styles";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo />
        <div>
          <Button title="Cadastrar" />
          <Link to="/">
            <h1>Login</h1>
          </Link>
        </div>
      </Header>

      <ContentText>
        <h1>Faça um animal feliz hoje. Não compre, adote!</h1>
      </ContentText>
    </Container>
  );
};

export default HomePage;

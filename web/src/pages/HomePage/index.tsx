import React from "react";
import bg from "./bg.svg";

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
          <Link to="/cadastrar">
            <Button title="Cadastrar" />
          </Link>
          <Link to="/cadastrar">
            <h1>Login</h1>
          </Link>
        </div>
      </Header>

      <ContentText>
        <div>
          <h1>
            Faça um animal feliz hoje. <br />
            Não compre, adote!
          </h1>
          <h2>Já ajudamos mais de 200 pets a acharem um lar.</h2>
          <div>
            <Button title="Ver animais disponíveis " />
          </div>
        </div>
        <img src={bg} alt="" />
      </ContentText>
    </Container>
  );
};

export default HomePage;

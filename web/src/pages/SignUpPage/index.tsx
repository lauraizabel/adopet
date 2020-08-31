import React from "react";
import Logo from "../../components/Logo";
import Inputs from "../../components/Inputs";
import Button from "../../components/Button";

import { Container, LeftSection, RightSection } from "./styles";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUpPage: React.FC = () => {
  return (
    <Container>
      <LeftSection>
        <Logo />
        <h1>Cadastro</h1>

        <h2>
          Faça seu cadastro e ajude a cada vez mais famílias ficarem feliz com
          seus novos membros da família!
        </h2>

        <div>
          <Link to="/">
            <FaArrowLeft />
            <p>Voltar para home</p>
          </Link>
        </div>
      </LeftSection>
      <RightSection>
        <Inputs />
        <Inputs />
        <Inputs />
        <Inputs />
        <Button title="Cadastrar" />
      </RightSection>
    </Container>
  );
};

export default SignUpPage;

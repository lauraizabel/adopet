import React from "react";
import Logo from "../../components/Logo";
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
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <input type="text" placeholder="Whatsapp" />
        <div className="input-group button">
          <select name="" id="" className="first">
            <option value="" selected disabled>
              Cidade
            </option>
          </select>
          <select name="" id="" className="second">
            <option value="" selected disabled>
              UF
            </option>
          </select>
        </div>
        <Button title="Cadastrar" />
        <div>
          <Link to="/">
            <FaArrowLeft />
            <p>Voltar para home</p>
          </Link>
        </div>
      </RightSection>
    </Container>
  );
};

export default SignUpPage;

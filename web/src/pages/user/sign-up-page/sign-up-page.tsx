import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import Logo from "components/Logo";

import {
  Container,
  LeftSection,
  RightSection,
  Wrapper,
} from "./sign-up-page.styles";
import FormSignUp from "pages/user/sign-up-page/form/form";

const SignUpPage: React.FC = () => {
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e.preventDefault());
    console.log("submit", e.target);
  };

  return (
    <Wrapper>
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
          <FormSignUp onSubmit={onSubmitForm} />
        </RightSection>
      </Container>
    </Wrapper>
  );
};

export default SignUpPage;

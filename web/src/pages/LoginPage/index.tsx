import React from "react";
import { Container, LeftSection, RightSection, ContainerForm } from "./styles";
import adopetimg from "./adopetimg.jpg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

interface Login {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email("E-mail inválido.").required("E-mail obrigatório."),
  password: yup
    .string()
    .required("Senha obrigatória.")
    .min(6, "Senha deve conter mais de 6 caracteres."),
});

const LoginPage: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<Login>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Login) => console.log(data);

  return (
    <Container>
      <LeftSection>
        <img src={adopetimg} alt="" />
      </LeftSection>
      <RightSection>
        <h1>Bem vindo(a) de volta!</h1>
        <ContainerForm>
          <form onSubmit={handleSubmit(onSubmit)}>
            <p>E-mail</p>
            <input type="text" name="email" ref={register} />
            <p className="typeError">{errors.email?.message}</p>

            <p>Senha</p>
            <input type="password" name="password" ref={register} />
            <p className="typeError">{errors.password?.message}</p>
            <Link to="/">
              <p className="password">Esqueceu sua senha?</p>
            </Link>
            <Button type="submit" title="Entrar"></Button>
          </form>
        </ContainerForm>
      </RightSection>
    </Container>
  );
};

export default LoginPage;

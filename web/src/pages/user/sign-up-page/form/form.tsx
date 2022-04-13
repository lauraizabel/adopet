import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import Button from "components/Button";
import { FaArrowLeft } from "react-icons/fa";

import States from "utils/forms/states";

import { Container } from "./form.styles";
import User from "../../../../@types/user";

interface FormSignUpProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const FormSignUp: React.FC<FormSignUpProps> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
    city: "",
    state: "",
    phone: "",
  });

  const values: SubmitHandler<User> = (data) => console.log(data);

  return (
    <Container onSubmit={handleSubmit(values)}>
      <input type="text" placeholder="Nome" name="name" ref={register} />
      <input type="text" placeholder="E-mail" name="email" ref={register} />
      <input
        type="password"
        placeholder="Senha"
        name="password"
        ref={register}
      />
      <input type="text" placeholder="Whatsapp" name="phone" ref={register} />
      <div className="input-group button">
        <select id="" className="first" name="state">
          <option value="" selected disabled>
            UF
          </option>
          {States.map((value) => (
            <option value={value.initials}>{value.name}</option>
          ))}
        </select>
        <select id="" className="second" name="city">
          <option value="" selected disabled>
            Cidade
          </option>
        </select>
      </div>
      <Button title="Cadastrar" type="submit" />
      <div>
        <Link to="/">
          <FaArrowLeft />
          <p>Voltar para home</p>
        </Link>
      </div>
    </Container>
  );
};

export default FormSignUp;

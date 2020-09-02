import React from "react";
import Logo from "../../components/Logo";
import Button from "../../components/Button";

import { Container, LeftSection, RightSection } from "./styles";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const RegisterPetPage: React.FC = () => {
  return (
    <Container>
      <LeftSection>
        <Logo />
        <h1>Cadastro</h1>

        <h2>
          Faça seu cadastro e ajude a cada vez mais famílias ficarem felizes com
          seus novos membros da família!
        </h2>

        <div>
          <Link to="/">
            <FaArrowLeft />
            <p>Voltar para pets cadastrados</p>
          </Link>
        </div>
      </LeftSection>
      <RightSection>
        <input type="text" placeholder="Tipo do Animal" name="type" required />
        <input type="text" placeholder="Nome do animal" name="name" required />
        <input
          type="number"
          placeholder="Idade aproximada (em meses)"
          name="age"
        />
        <input type="file" placeholder="Foto" required name="picture" />
        <div className="input button">
          <select name="" id="" required className="first">
            <option value="" selected disabled>
              Caracteristicas
            </option>
          </select>
          <button>
            <FaPlus size={16} />
          </button>
        </div>
        <Link to="/perfil/:id">
          <Button title="Cadastrar pet" />
        </Link>
        <div>
          <Link to="/perfil/:id">
            <FaArrowLeft />
            <p>Voltar para pets cadastrados</p>
          </Link>
        </div>
      </RightSection>
    </Container>
  );
};

export default RegisterPetPage;

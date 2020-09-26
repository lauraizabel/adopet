import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import bg from "./bg.svg";
import { Container, ContentText, Header } from "./styles";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";

interface Login {
  email: string;
  password: string;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    borderRadius: "8px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
  },
  input: {
    display: "flex",
    flexDirection: "column",
  },
  login: {
    fontSize: "24px",
    fontWeight: 500,
    marginBottom: "8px",
  },
  inputs: {
    marginBottom: "8px",
  },
  inputserror: {
    color: "red",
  },
}));

const HomePage: React.FC = () => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const schema = Yup.object().shape({
    email: Yup.string().email().required("E-mail obrigatório."),
    password: Yup.string().min(6, "Senha com mínimo de 6 caracteres."),
  });

  const { handleSubmit, errors, register } = useForm<Login>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Login) => console.log(data);

  const body = (
    <div style={modalStyle} className={classes.paper} id="styled-modal">
      <h1 className={classes.login}>Login</h1>
      <form
        action="POST"
        autoComplete="off"
        className={classes.input}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          className={classes.inputs}
          ref={register}
        />
        <p className={classes.inputserror}>{errors.email?.message}</p>
        <TextField
          id="outlined-basic"
          label="Senha"
          variant="outlined"
          className={classes.inputs}
          type="password"
          ref={register}
        />
        <p className={classes.inputserror}>{errors.password?.message}</p>
        <Button type={"submit"} title="Entrar" />
      </form>
    </div>
  );

  return (
    <Container>
      <Header>
        <Logo />
        <div>
          <Link to="/cadastrar">
            <Button title="Cadastrar" />
          </Link>
          <button className="login" type="button" onClick={handleOpen}>
            Login
          </button>
          <div>
            <Modal open={open} onClose={handleClose}>
              {body}
            </Modal>
          </div>
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
            <Link to="/animais-cadastrados">
              <Button title="Ver animais disponíveis " />
            </Link>
          </div>
        </div>
        <img src={bg} alt="" />
      </ContentText>
    </Container>
  );
};

export default HomePage;

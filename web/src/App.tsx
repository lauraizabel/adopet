import React from "react";
import "./styles/GlobalStyles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import ShowProfilePage from "./pages/ShowProfilePage";
import RegisterPetPage from "./pages/RegisterPetPage";
import ShowPetsPage from "./pages/ShowPetsPage";
import LoginPage from "./pages/LoginPage";

import AuthContext from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthContext.Provider value={{ name: "Laura" }}>
          <Route path="/entrar" exact={true} component={LoginPage} />
          <Route path="/perfil/:id" exact={true} component={ShowProfilePage} />
          <Route
            path="/perfil/:id/cadastrar-pet"
            exact={true}
            component={RegisterPetPage}
          />
        </AuthContext.Provider>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/cadastrar" exact={true} component={SignUpPage} />
        <Route
          path="/animais-cadastrados"
          exact={true}
          component={ShowPetsPage}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

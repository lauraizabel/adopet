import React from "react";
import "./styles/GlobalStyles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/cadastrar" exact={true} component={SignUpPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

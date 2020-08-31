import React from "react";
import "./styles/GlobalStyles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

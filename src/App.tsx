import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import login from "../src/assets/login.svg";
import LoginContainer from "./components/LoginContainer";
import { Switch, Route } from "react-router-dom";
import MoviePage from "./components/MoviePage";
import Welcome from "./components/Welcome";
import Details from "./components/Details";

function App() {
  return (
    <Switch>
      <Route path="/" component={LoginContainer} exact />
      <Route path="/welcome" component={Welcome} />
      <Route path="/movie" component={MoviePage} />
      <Route path="/details/:id" component={Details} />
      <LoginContainer />
    </Switch>
  );
}

export default App;

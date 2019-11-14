import React from "react";

import "./App.css";

import AppHeader from "./header/AppHeader";
import AppBody from "./body/AppBody";

import api from "./body/api";

const App = props => {
  const numPokemon = props.numPokemon || null;
  return (
    <div className="app">
      <AppHeader />
      <AppBody numPokemon={numPokemon} api={api} />
    </div>
  );
};

export default App;

import React from "react";

import "./App.css";

import AppHeader from "./header/AppHeader";
import AppBody from "./body/AppBody";

import api from "./body/api";

const NUM_POKEMON = 807;

const App = props => {
  const numPokemon = props.numPokemon || NUM_POKEMON;
  return (
    <div className="app">
      <AppHeader />
      <AppBody numPokemon={numPokemon} api={api} />
    </div>
  );
};

export default App;

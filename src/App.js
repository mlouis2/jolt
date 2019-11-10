import React from "react";

import "./App.css";

import AppHeader from "./header/AppHeader";
import AppBody from "./body/AppBody";

import mockApi from "./body/fakeapi";
import realApi from "./body/api";

const NUM_POKEMON = 807;

const App = props => {
  const numPokemon = props.numPokemon || NUM_POKEMON;
  const useMock = false;
  const api = useMock ? mockApi : realApi;
  return (
    <div className="app">
      <AppHeader />
      <AppBody numPokemon={numPokemon} api={api} />
    </div>
  );
};

export default App;

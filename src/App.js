import React from "react";

import "./App.css";

import AppHeader from "./header/AppHeader";
import AppBody from "./body/AppBody";

import mockApi from "./body/fakeapi";
import realApi from "./body/api";

const App = props => {
  const numPokemon = props.numpokemon || 807;
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

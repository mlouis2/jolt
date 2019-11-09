import React from "react";

import "./App.css";

import AppHeader from "./header/AppHeader";
import AppBody from "./body/AppBody";

const App = props => {
  const numPokemon = props.numpokemon || 806;
  return (
    <div className="app">
      <AppHeader />
      <AppBody numPokemon={numPokemon} />
    </div>
  );
};

export default App;

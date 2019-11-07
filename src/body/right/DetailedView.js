import React, { useState, useEffect } from "react";

import "./DetailedView.css";
import { InfoBox } from "./InfoBox.js";

function DetailedView(props) {
  const [moves, setMoves] = useState([]);
  const [evolution, setEvolution] = useState([]);

  const api = props.api;

  function addEvolutionAndMoves() {
    if (props.currentPokemon && api) {
      api.getPokemonMoves(props.currentPokemon.index).then(result => {
        setMoves(result);
      });
      api.getPokemonEvolution(props.currentPokemon.index).then(result => {
        setEvolution(result);
      });
    }
  }

  useEffect(addEvolutionAndMoves, [props.currentPokemon]);

  if (moves.length > 0 && evolution.length > 0) {
    console.log("before rendering detailed view");
    console.log("moves is ", moves);
    console.log("evolution is ", evolution);
    return (
      <div className="detailedView">
        <InfoBox
          currentPokemon={props.currentPokemon}
          pokemonList={props.pokemonList}
          evolution={evolution}
          moves={moves}
        />
      </div>
    );
  } else {
    return <div />;
  }
}

export default DetailedView;

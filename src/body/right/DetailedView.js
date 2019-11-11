import React, { useState, useEffect } from "react";

import "./DetailedView.css";
import { InfoBox } from "./InfoBox.js";

//The detailed view holds a Pokemon's evolution chain and moves, and is located on
//the right hand side of the screen.
function DetailedView(props) {
  const [moves, setMoves] = useState([]);
  const [evolution, setEvolution] = useState([]);

  const api = props.api;

  //When the DetailedView is rendered, the Pokemon's moves and evolution are accessed
  //via memoization or via fakeapi.js or api.js.
  useEffect(() => {
    addEvolutionAndMoves();
  }, [props.currentPokemon]);

  //Loads the evolution and moves of the current Pokemon.
  function addEvolutionAndMoves() {
    setEvolution([]);
    setMoves([]);
    if (props.currentPokemon && api) {
      api.getPokemonMoves(props.currentPokemon.index).then(result => {
        setMoves(result);
      });
      api.getPokemonEvolution(props.currentPokemon.index).then(result => {
        setEvolution(result);
      });
    }
  }

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
}

export default DetailedView;

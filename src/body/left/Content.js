import React, { useState, useEffect } from "react";
import "react-activity/lib/Squares/Squares.css";

import "./Content.css";

import { ResponsiveCarousel } from "./carousel/Carousel";
import { titleCase, formatNumber, formatTypes } from "./carousel/Pokemon";
import { Squares } from "react-activity";

const LOADING_ICON_SIZE = 100;

let memoizedInfo = [];

//Contains both the carousel and the info box on the right-hand side of the screen.
function Content(props) {
  const api = props.api;
  let numPokemon;
  numPokemon = props.numPokemon
    ? props.numPokemon
    : api.getMaxNumberOfPokemon();
  const [result, setResult] = useState([]);

  //If the information is not yet memoized, performs API calls. Otherwise, simply
  //sets the memoized data as the result.
  useEffect(() => {
    if (memoizedInfo.length === 0) {
      readData();
    } else {
      setResult(memoizedInfo);
    }
  }, []);

  //Works with fakeapi.js or api.js to retrieve the Pokemon data.
  function readData() {
    const allInfo = [];
    for (let index = 0; index < numPokemon; index++) {
      allInfo.push(api.getPokemonInfo(index + 1));
    }
    Promise.all(allInfo).then(info => {
      const pokemon = [];
      info.forEach(({ name, types, index, sprite, description }) => {
        pokemon[index - 1] = {
          name: titleCase(name),
          types: formatTypes(types),
          number: formatNumber(index),
          sprite,
          description,
          index
        };
      });
      memoizedInfo = pokemon;
      setResult(pokemon);
    });
  }

  //If we have the result (length > 0), returns the carousel. Otherwise, returns
  //loading icons.
  if (result.length > 0) {
    return (
      <div className="content">
        <ResponsiveCarousel pokemonList={result} api={api} />
      </div>
    );
  } else {
    return (
      <div className="content">
        <div className="loadingIcon">
          <Squares
            color="black"
            size={LOADING_ICON_SIZE}
            speed={1}
            animating={true}
          />
        </div>
      </div>
    );
  }
}

export default Content;

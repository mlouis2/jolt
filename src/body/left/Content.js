import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import "react-activity/lib/Squares/Squares.css";

import "./Content.css";

import { ResponsiveCarousel } from "./carousel/Carousel";
import { titleCase, formatNumber, formatTypes } from "./carousel/Pokemon";
import { Squares } from "react-activity";

let memoizedInfo = [];

function Content(props) {
  const api = props.api;
  const numPokemon = props.numPokemon;

  const [result, setResult] = useState([]);

  useEffect(() => {
    if (memoizedInfo.length === 0) {
      readData();
    } else {
      setResult(memoizedInfo);
    }
  }, []);

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
          <Squares color="black" size={100} speed={1} animating={true} />
        </div>
      </div>
    );
  }
}

export default Content;

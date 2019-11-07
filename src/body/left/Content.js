import React, { useState, useEffect } from "react";

import "./Content.css";

import { ResponsiveCarousel } from "./carousel/Carousel";
import { titleCase, formatNumber, formatTypes } from "./carousel/Pokemon";

function Content(props) {
  const api = props.api;

  const [result, setResult] = useState([]);

  useEffect(() => {
    readData();
  }, []);

  function readData() {
    api.getNumPokemon().then(numPokemon => {
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
        setResult(pokemon);
      });
    });
  }

  if (result.length > 0) {
    return (
      <div className="content">
        <ResponsiveCarousel pokemonList={result} api={api} />
      </div>
    );
  } else {
    return <div className="content" />;
  }
}

export default Content;

import React from "react";

import unknown from "../../../images/unknown.png";

function titleCase(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

function formatNumber(number) {
  let strNumber = number.toString();
  while (strNumber.length < 3) {
    strNumber = "0" + strNumber;
  }
  return "#" + strNumber;
}

function formatTypes(types) {
  return types.map(s => titleCase(s)).join("/");
}

function Pokemon(
  sprite = unknown,
  name = "Pokemon",
  number = "?",
  types = "?",
  description = "...",
  index
) {
  const imgAlt = "Image of the Pokémon " + name + ".";
  if (sprite === null) {
    sprite = unknown;
  }
  return (
    <div key={index} className="pokemon" id={name}>
      <div className="pokemonHeader">
        <img src={sprite} alt={imgAlt} />
        <div className="pokemonName">{name}</div>
        <div className="pokemonNumberAndType">
          {number} {types}
        </div>
      </div>
      <div className="pokemonDescription">
        {name} is {number}, a {types.toLowerCase()} Pokémon. {description}
      </div>
    </div>
  );
}

export { Pokemon, titleCase, formatNumber, formatTypes };

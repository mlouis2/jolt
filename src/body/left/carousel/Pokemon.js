import React from "react";

import unknown from "../../../images/unknown.png";

//Title cases strings, i.e. bulbasaur => Bulbasaur.
function titleCase(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

//Formats Pokemon ID numbers, i.e. 4 ==> #004
function formatNumber(number) {
  let numberAsString = number.toString();
  while (numberAsString.length < 3) {
    numberAsString = "0" + numberAsString;
  }
  return "#" + numberAsString;
}

//Formats Pokemon types, i.e. ["fire", "water"] => "fire/water"
function formatTypes(types) {
  return types.map(s => titleCase(s)).join("/");
}

//Contains the information that goes in each card of the carousel.
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
        <br></br>
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

import React from "react";

import "./InfoBox.css";
import "../left/carousel/Carousel.css";
import "../left/Content.css";

import { formatTypes, titleCase } from "../left/carousel/Pokemon";

import { Squares } from "react-activity";
import "react-activity/lib/Squares/Squares.css";

function formatMoveName(moveName) {
  moveName = titleCase(moveName);
  while (moveName.includes("-")) {
    moveName =
      moveName.substring(0, moveName.indexOf("-")) +
      " " +
      titleCase(moveName.substring(moveName.indexOf("-") + 1));
  }
  return moveName;
}

function InfoBox(props) {
  const currentPokemon = props.currentPokemon;
  const pokemonList = props.pokemonList;

  function getSpritesAndArrows() {
    return (
      <div className="spritesAndArrows">
        {currentPokemon.evolution.map((pokemonIndex, index) => {
          return (
            pokemonList[pokemonIndex - 1] && (
              <div className="spriteAndArrow" key={index}>
                <img
                  src={pokemonList[pokemonIndex - 1].sprite}
                  alt={"Image of " + pokemonList[pokemonIndex - 1].name}
                />
                {index !== currentPokemon.evolution.length - 1 && (
                  <div className="arrow">></div>
                )}
              </div>
            )
          );
        })}
      </div>
    );
  }

  function getMoveset() {
    return (
      <div>
        {currentPokemon.moves.map((move, index) => {
          return (
            <div className="move" key={index}>
              <div className="moveName">{formatMoveName(move.name)}</div>
              <div className="moveTypes">{titleCase(move.type)}</div>
              <div className="moveDescription">{move.description}</div>
            </div>
          );
        })}
      </div>
    );
  }

  if (currentPokemon !== undefined) {
    currentPokemon.moves = props.moves;
    currentPokemon.evolution = props.evolution;
    const imgAlt = "Image of the Pokémon " + currentPokemon.index + ".";
    return (
      <div className="infoBox" id={"infoBox" + currentPokemon.index}>
        <div className="pokemonHeader">
          <img src={currentPokemon.sprite} alt={imgAlt} />
          <div className="pokemonName">{currentPokemon.name}</div>
          <div className="pokemonNumberAndType">
            {currentPokemon.number}
            <br />
            {currentPokemon.types}
          </div>
        </div>
        <div className="evolution">
          {currentPokemon.evolution.length > 0 ? (
            getSpritesAndArrows()
          ) : (
            <div className="evolutionLoadingIcon">
              <Squares color="black" size={16} speed={1} animating={true} />
            </div>
          )}
        </div>
        <div className="moveset">
          {currentPokemon.moves.length > 0 ? (
            getMoveset()
          ) : (
            <div className="movesLoadingIcon">
              <Squares color="black" size={16} speed={1} animating={true} />
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return "";
  }
}

export { InfoBox, formatMoveName };

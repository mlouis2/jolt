import React from "react";

import "./InfoBox.css";
import "../left/carousel/Carousel.css";
import "../left/Content.css";

import { titleCase } from "../left/carousel/Pokemon";

import { Squares } from "react-activity";
import "react-activity/lib/Squares/Squares.css";
import unknown from "../../images/unknown.png";

const LOADING_ICON_SIZE = 16;

//Formats a Pokemon's move name, i.e. razor-wind => Razor Wind.
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

//The info box contains the Pokemon's evolution chain and moves.
function InfoBox(props) {
  const currentPokemon = props.currentPokemon;
  const pokemonList = props.pokemonList;

  //Builds and returns the evolution chain.
  function getSpritesAndArrows() {
    return (
      <div className="spritesAndArrows">
        {currentPokemon.evolution.map((pokemonIndex, index) => {
          const sprite =
            pokemonList[pokemonIndex - 1].sprite !== null
              ? pokemonList[pokemonIndex - 1].sprite
              : unknown;
          return (
            pokemonList[pokemonIndex - 1] && (
              <div className="spriteAndArrow" key={index}>
                <img
                  src={sprite}
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

  //Builds and returns the moveset, comprised of the first ten moves from the API.
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

  //If the sprite has not yet loaded, returns an image of a question mark.
  function getSpriteSource() {
    return currentPokemon.sprite !== null ? currentPokemon.sprite : unknown;
  }

  //If the current Pokemon is not yet defined, returns a loading screen. Otherwise,
  //returns the info box with the Pokemon's information.
  if (currentPokemon !== undefined) {
    currentPokemon.moves = props.moves;
    currentPokemon.evolution = props.evolution;
    const imgAlt = "Image of the Pokémon " + currentPokemon.index + ".";
    return (
      <div className="infoBox" id={"infoBox" + currentPokemon.index}>
        <div className="pokemonHeader">
          <img src={getSpriteSource()} alt={imgAlt} />
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
              <Squares
                color="black"
                size={LOADING_ICON_SIZE}
                speed={1}
                animating={true}
              />
            </div>
          )}
        </div>
        <div className="moveset">
          {currentPokemon.moves.length > 0 ? (
            getMoveset()
          ) : (
            <div className="movesLoadingIcon">
              <Squares
                color="black"
                size={LOADING_ICON_SIZE}
                speed={1}
                animating={true}
              />
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

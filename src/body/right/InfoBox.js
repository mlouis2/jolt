import React from 'react'

import './InfoBox.css'
import '../left/carousel/Carousel.css'
import '../left/Content.css'

import { formatTypes, titleCase } from '../left/carousel/Pokemon'

function formatMoveName(moveName) {
     moveName = titleCase(moveName);
     while (moveName.includes("-")) {
          moveName = moveName.substring(0, moveName.indexOf("-")) + ' '+ titleCase(moveName.substring(moveName.indexOf("-") + 1));
     }
     return moveName;
}

function getSpritesAndArrows(currentPokemon, pokemonList) {
     if (!currentPokemon.evolution) {
          return (
               <div>?</div>
          )
     }
     currentPokemon.evolution.map((pokemon, index) => {
          return (index === currentPokemon.evolution.length - 1) ?
          (
               <div className="spriteAndArrow" key={index}>
                    <img
                         src={pokemonList[pokemon - 1].sprite}
                         alt={"Image of " + pokemonList[pokemon - 1].name}/>
               </div>
          )
          : (
               <div className="spriteAndArrow" key={index}>
                    <img
                         src={pokemonList[pokemon - 1].sprite}
                         alt={"Image of " + pokemonList[pokemon - 1].name}/>
                    <div className="arrow">
                         &nbsp;>&nbsp;
                    </div>
               </div>
          )
     })
}

function getMoves(currentPokemon, pokemonList) {
     if (!currentPokemon.moves) {
          return (
               <div>?</div>
          )
     }
     currentPokemon.moves.map((move, index) => {
          return (
               <div className="move" key={index}>
                    <div className="moveName">
                         {formatMoveName(move.name)}
                    </div>
                    <div className="moveTypes">
                         {formatTypes(move.types)}
                    </div>
                    <div className="moveDescription">
                         {move.description}
                    </div>
               </div>
          )
     })
}

function InfoBox(props) {
     const currentPokemon = props.currentPokemon;
     const pokemonList = props.pokemonList;
     if (currentPokemon !== undefined) {
          const imgAlt = "Image of the Pokémon " + currentPokemon.index + ".";
          return (
               <div className="infoBox" id={"infoBox" + currentPokemon.index}>
                    <div className="pokemonHeader">
                         <img src={currentPokemon.sprite} alt={imgAlt}/>
                         <div className="pokemonName">
                              {currentPokemon.name}
                         </div>
                         <div className="pokemonNumberAndType">
                              {currentPokemon.number}
                              <br/>
                              {currentPokemon.types}
                         </div>
                    </div>
                    <div className="evolution">
                         <div className="spritesAndArrows">
                              {getSpritesAndArrows(currentPokemon, pokemonList)}
                         </div>
                    </div>
                    <div className="moveset">
                         {getMoves(currentPokemon, pokemonList)}
                    </div>
               </div>
          )
     } else {
          return '';
     }
}

export {
     InfoBox,
     formatMoveName
}

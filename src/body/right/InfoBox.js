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

function InfoBox(props) {
     const api = props.api
     const currentPokemon = props.currentPokemon
     const pokemonList = props.pokemonList
     console.log('initial list', pokemonList)

     if (currentPokemon !== undefined) {
          currentPokemon.moves = props.moves
          currentPokemon.evolution = props.evolution
          const imgAlt = "Image of the Pokémon " + currentPokemon.index + ".";
          console.log("pokemon list is ", pokemonList)
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
                              {currentPokemon.evolution.map((pokemon, index) => {
                                   console.log("index is " + index)
                                   console.log('pokemonlist[index]', pokemonList)
                                   return (index === currentPokemon.evolution.length - 1) ?
                                   (
                                        <div className="spriteAndArrow" key={index}>
                                             <img
                                                  src={pokemonList[index].sprite}
                                                  alt={"Image of " + pokemonList[index].name}/>
                                        </div>
                                   )
                                   : (
                                        <div className="spriteAndArrow" key={index}>
                                             <img
                                                  src={pokemonList[index].sprite}
                                                  alt={"Image of " + pokemonList[index].name}/>
                                             <div className="arrow">
                                                  &nbsp;>&nbsp;
                                             </div>
                                        </div>
                                   )
                              })}
                         </div>
                    </div>
                    <div className="moveset">
                         {currentPokemon.moves.map((move, index) => {
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
                         })}
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

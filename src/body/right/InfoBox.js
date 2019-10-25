import React from 'react'

import './InfoBox.css'
import '../left/carousel/Carousel.css'
import '../left/Content.css'

import { formatTypes, titleCase } from '../left/carousel/Pokemon'

function formatMoveName(moveName) {
     moveName = titleCase(moveName);
     if (moveName.includes("-")) {
          moveName = moveName.substring(0, moveName.indexOf("-") + 1) + titleCase(moveName.substring(moveName.indexOf("-") + 1));
     }
     return moveName;
}

function InfoBox(props) {
     const currentPokemon = props.currentPokemon;
     if (currentPokemon !== undefined) {
          const imgAlt = "Image of the Pokémon " + currentPokemon.name + ".";
          return (
               <div className="InfoBox">
                    <div className="PokemonHeader">
                    <img src={currentPokemon.sprite} alt={imgAlt}/>
                    <div className="PokemonName">
                    {currentPokemon.name}
                    </div>
                    <div className="PokemonNumberAndType">
                    {currentPokemon.number}<br/>{currentPokemon.types}
                    </div>
                    </div>
                  <div className="Evolution">
                  </div>
                  <div className="Moveset">
                    {currentPokemon.moves.map((move, index) => {
                        return (
                            <div className="Move" key={index}>
                              <div className="MoveName">
                                   {formatMoveName(move.name)}
                              </div>
                              <div className="MoveTypes">
                                   {formatTypes(move.types)}
                              </div>
                              <div className="MoveDescription">
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

export default InfoBox

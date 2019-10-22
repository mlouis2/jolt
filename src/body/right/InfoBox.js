import React from 'react'

import './InfoBox.css'
import '../left/carousel/Carousel.css'
import '../left/Content.css'

function InfoBox(props) {
     const currentPokemon = props.currentPokemon;
     if (currentPokemon !== undefined) {
          return (
               <div className="InfoBox">
                    <div className="PokemonHeader">
                    <img src={currentPokemon.sprite} />
                    <div className="PokemonName">
                    {currentPokemon.name}
                    </div>
                    <div className="PokemonNumberAndType">
                    {currentPokemon.number}<br/>{currentPokemon.types}
                    </div>
                    </div>
                    <div className="PokemonDescription">
                    {currentPokemon.name} is {currentPokemon.number}, a {currentPokemon.types.toLowerCase()} Pokémon. {currentPokemon.description}
                    </div>
                  <div className="Evolution">
                  </div>
                  <div className="Moveset">
                  </div>
               </div>
          )
     } else {
          return '';
     }
}

export default InfoBox

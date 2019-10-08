import React from 'react'

import './InfoBox.css'
import '../left/carousel/Carousel.css'

// Note how functional components that don’t have additional logic simply return their markup.
const InfoBox = () => (
  <div className="InfoBox">
    <div className="PokemonHeader">
        <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
        <div className="PokemonName">
          Bulbasaur
        </div>
        <div className="PokemonNumber">
          (#001)
          <div className="PokemonType">
          </div>
        </div>
     </div>
     <div className="PokemonDescription">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
     </div>
     <div className="Evolution">
     </div>
     <div className="Moveset">
     </div>
  </div>
)

export default InfoBox

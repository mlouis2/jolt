import React from 'react'

import './DetailedView.css'
import { InfoBox } from './InfoBox.js'

function DetailedView(props) {
     return (
          <div className="detailedView">
               <InfoBox
                    currentPokemon={props.currentPokemon}
                    pokemonList={props.pokemonList}/>
          </div>
     );
}

export default DetailedView

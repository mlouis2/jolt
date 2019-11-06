import React, { useState } from 'react'

import './DetailedView.css'
import { InfoBox } from './InfoBox.js'

function DetailedView(props) {

     const [moves, setMoves] = useState([]);
     const [evolution, setEvolution] = useState([]);

     const api = props.api

     function addEvolutionAndMoves() {
          if (props.currentPokemon && api) {
               Promise.resolve(api.getPokemonMoves(props.currentPokemon.index + 1)).then((movesResponse) => {
                    setMoves(movesResponse)
               })

               Promise.resolve(api.getPokemonEvolution(props.currentPokemon.index + 1)).then((evolutionResponse) => {
                    setEvolution(evolutionResponse)
               })
          }
     }

     addEvolutionAndMoves()

     return (
          <div className="detailedView">
               <InfoBox
                    currentPokemon={props.currentPokemon}
                    pokemonList={props.pokemonList}
                    api={api}
                    evolution={evolution}
                    moves={moves}/>
          </div>
     );
}

export default DetailedView

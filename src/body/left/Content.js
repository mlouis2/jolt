import React from 'react'

import './Content.css'
import data from '../fakeData.json'

import ResponsiveCarousel from './carousel/Carousel'
import { titleCase, formatNumber, formatTypes } from './carousel/Pokemon'

function Content() {
     let pokemon = []
     function readData() {
          for (let i = 1; i < data.length + 1; i++) {
               pokemon.push(data[i]);
          }
     }

     readData();
     const result = [];

     pokemon.forEach((pokemon, index) => {
          result.push({
               sprite: pokemon.sprite,
               name: titleCase(pokemon.name),
               number: formatNumber(pokemon.number),
               types: formatTypes(pokemon.types),
               description: pokemon.description,
               index,
               moves: pokemon.moves,
               evolution: pokemon.evolution
          });
     })
     return (
          <div className="Content">
               <ResponsiveCarousel pokemonList={result}/>
          </div>
     );
}

export default Content

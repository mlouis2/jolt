import React from 'react'

import './Content.css'
import data from '../fakeData.json'

import { ResponsiveCarousel } from './carousel/Carousel'
import { titleCase, formatNumber, formatTypes } from './carousel/Pokemon'

function Content() {
  let pokemon = []
  function readData() {
    data.results.forEach((result) => {
      pokemon.push(result);
    })
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
        index
      });
  })
  return (
  <div className="Content">
    <ResponsiveCarousel pokemonList={result}/>
  </div>
  )
}

export {
  Content
}

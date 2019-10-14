import React from 'react'

import './Content.css'
import data from '../fakeData.json'

import Carousel from './carousel/Carousel'
import SearchBar from './search/SearchBar'

function Content() {
  return (
  <div className="Content">
    <SearchBar />
    <Carousel />
  </div>
  )
}

let pokemon = []

function readData() {
  data.results.forEach((result) => {
    pokemon.push(result);
  })
  console.log(pokemon)
}

readData();

export {
  Content,
  pokemon
}

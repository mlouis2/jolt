import React from 'react'

import './Content.css'
import data from '../fakeData.json'

import { ResponsiveCarousel } from './carousel/Carousel'
import DetailedView from '../right/DetailedView'

function Content() {
  return (
  <div className="Content">
    <ResponsiveCarousel />
    <DetailedView />
  </div>
  )
}

let pokemon = []

function readData() {
  data.results.forEach((result) => {
    pokemon.push(result);
  })
}

readData();

export {
  Content,
  pokemon
}

import React, { useState, useEffect } from 'react'

import './Content.css'
import data from '../api.js'

import ResponsiveCarousel from './carousel/Carousel'
import { titleCase, formatNumber, formatTypes } from './carousel/Pokemon'

function Content() {

     const [dataLoaded, setDataLoaded] = useState(false)
     const [result, setResult] = useState([]);

     useEffect(() => {
          readData();
     }, [])

     async function readData() {
          const realData = await data
          let pokemon = [];
          for (let i = 1; i < realData.length + 1; i++) {
               pokemon.push(realData[i]);
          }
          let processedPokemon = []
          pokemon.forEach((pokemon, index) => {
               processedPokemon.push({
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
          setResult(processedPokemon);
          setDataLoaded(true);
     }

     if (!dataLoaded) {
          return null;
     }

     return (
          <div className="content">
               <ResponsiveCarousel pokemonList={result}/>
          </div>
     )

}

export default Content

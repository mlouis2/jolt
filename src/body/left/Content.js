import React, { useState, useEffect } from 'react'

import './Content.css'
import data from '../api.js'

import ResponsiveCarousel from './carousel/Carousel'
import { titleCase, formatNumber, formatTypes } from './carousel/Pokemon'

function Content() {

     const [dataLoaded, setDataLoaded] = useState(false)
     const [result, setResult] = useState([]);

     async function readData() {
          const realData = await data
          console.log("TESTING TESTING TESTING");
          console.log(typeof(realData))
          let pokemon = [];
          console.log("reading data!");
          console.log("DATAAAAA")
          console.log(realData)
          console.log("data length", realData.length)
          for (let i = 1; i < realData.length + 1; i++) {
               console.log("data at i is", realData[i]);
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

     useEffect(() => {
         readData();
     }, [])

     console.log("result", result);

     if (!dataLoaded) {
          console.log("returning null");
          return null;
     }

     console.log("not returning null")

     return (
               <div className="Content">
                    <ResponsiveCarousel pokemonList={result}/>
               </div>
     )

}

export default Content

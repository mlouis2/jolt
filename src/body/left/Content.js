import React, { useState, useEffect } from 'react'

import './Content.css'
import { getNumPokemon, getPokemon, getPokemonName, getPokemonTypes, getPokemonNumber, getPokemonSprite, getPokemonDescription, getPokemonMoves, getPokemonEvolution } from '../fakeapi.js'

import { ResponsiveCarousel } from './carousel/Carousel'
import { titleCase, formatNumber, formatTypes } from './carousel/Pokemon'

function Content() {

     const [dataLoaded, setDataLoaded] = useState(false)
     const [result, setResult] = useState([]);

     useEffect(() => {
          readData();
     }, [])

     async function readData() {
          const pokemon = []
          Promise.resolve(getNumPokemon()).then((numPokemon) => {
               setResult()
               for (let index = 0; index < numPokemon; index++) {
                    pokemon.push({index})
               }
               setResult(pokemon)
               for (let index = 0; index < numPokemon; index++) {
                    const num = index + 1
                    Promise.resolve(getPokemonSprite(num)).then((sprite) => {
                         pokemon[index].sprite = sprite
                    })
                    Promise.resolve(getPokemonName(num)).then((name) => {
                         pokemon[index].name = titleCase(name)
                    })
                    Promise.resolve(getPokemonNumber(num)).then((number) => {
                         pokemon[index].number = number
                    })
                    Promise.resolve(getPokemonTypes(num)).then((types) => {
                         pokemon[index].types = types
                    })
                    Promise.resolve(getPokemonDescription(num)).then((description) => {
                         pokemon[index].description = description
                    })
                    Promise.resolve(getPokemonMoves(num)).then((moves) => {
                         pokemon[index].moves = moves
                    })
                    Promise.resolve(getPokemonEvolution(num)).then((evolution) => {
                         pokemon[index].evolution = evolution
                    })
               }
               setResult(pokemon);
               setDataLoaded(true);
          })
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

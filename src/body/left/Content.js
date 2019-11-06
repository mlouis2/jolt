import React, { useState, useEffect } from 'react'

import './Content.css'
import { getNumPokemon, getPokemon, getPokemonName, getPokemonTypes, getPokemonNumber, getPokemonSprite, getPokemonDescription, getPokemonMoves, getPokemonEvolution } from '../fakeapi.js'

import { ResponsiveCarousel } from './carousel/Carousel'
import { titleCase, formatNumber, formatTypes } from './carousel/Pokemon'

function Content() {

     const [result, setResult] = useState([]);

     function wrappedSetResult(result) {
          const loadedPokemon = result.map((pokemon) => pokemon)
          setResult(loadedPokemon)
     }

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
               const processedPokemon = pokemon
               for (let index = 0; index < numPokemon; index++) {
                    const num = index + 1
                    Promise.resolve(getPokemonSprite(num)).then((sprite) => {
                         pokemon[index].sprite = sprite
                         wrappedSetResult(pokemon);
                    })
                    Promise.resolve(getPokemonName(num)).then((name) => {
                         pokemon[index].name = titleCase(name)
                         wrappedSetResult(pokemon);
                    })
                    Promise.resolve(getPokemonNumber(num)).then((number) => {
                         pokemon[index].number = formatNumber(number)
                         wrappedSetResult(pokemon);
                    })
                    Promise.resolve(getPokemonTypes(num)).then((types) => {
                         pokemon[index].types = formatTypes(types)
                         wrappedSetResult(pokemon);
                    })
                    Promise.resolve(getPokemonDescription(num)).then((description) => {
                         pokemon[index].description = description
                         wrappedSetResult(pokemon);
                    })
                    Promise.resolve(getPokemonMoves(num)).then((moves) => {
                         pokemon[index].moves = moves
                         wrappedSetResult(pokemon);
                    })
                    Promise.resolve(getPokemonEvolution(num)).then((evolution) => {
                         pokemon[index].evolution = evolution
                         wrappedSetResult(pokemon);
                    })
               }
               setResult(pokemon);
          })
     }

     return (
          <div className="content">
               <ResponsiveCarousel pokemonList={result}/>
          </div>
     )

}

export default Content

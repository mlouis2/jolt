import React, { useState, useEffect } from 'react'

import './Content.css'

import { ResponsiveCarousel } from './carousel/Carousel'
import { titleCase, formatNumber, formatTypes } from './carousel/Pokemon'

function Content(props) {

     const api = props.api

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
          if (api) {
               Promise.resolve(api.getNumPokemon()).then((numPokemon) => {
                    setResult()
                    for (let index = 0; index < numPokemon; index++) {
                         pokemon.push({index})
                    }
                    setResult(pokemon)
                    const processedPokemon = pokemon
                    for (let index = 0; index < numPokemon; index++) {
                         const num = index + 1
                         Promise.resolve(api.getPokemonSprite(num)).then((sprite) => {
                              pokemon[index].sprite = sprite
                              wrappedSetResult(pokemon);
                         })
                         Promise.resolve(api.getPokemonName(num)).then((name) => {
                              pokemon[index].name = titleCase(name)
                              wrappedSetResult(pokemon);
                         })
                         Promise.resolve(api.getPokemonNumber(num)).then((number) => {
                              pokemon[index].number = formatNumber(number)
                              wrappedSetResult(pokemon);
                         })
                         Promise.resolve(api.getPokemonTypes(num)).then((types) => {
                              pokemon[index].types = formatTypes(types)
                              wrappedSetResult(pokemon);
                         })
                         Promise.resolve(api.getPokemonDescription(num)).then((description) => {
                              pokemon[index].description = description
                              wrappedSetResult(pokemon);
                         })
                    }
                    setResult(pokemon);
               })
          }
     }

     return (
          <div className="content">
               <ResponsiveCarousel pokemonList={result} api={api}/>
          </div>
     )

}

export default Content

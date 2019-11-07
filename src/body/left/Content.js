import React, { useState, useEffect } from 'react'

import './Content.css'

import { ResponsiveCarousel } from './carousel/Carousel'
import { titleCase, formatNumber, formatTypes } from './carousel/Pokemon'

function Content(props) {

     const api = props.api

     const [result, setResult] = useState([]);

     // function wrappedSetResult(result) {
     //      const loadedPokemon = result.map((pokemon) => pokemon)
     //      setResult(loadedPokemon)
     // }

     useEffect(() => {
          readData();
     }, [])


     // useEffect(() => {
          // api.getNumPokemon().then((numPokemon) => {
          //      for (let i = 0; i < 4; i++) {
          //           api.getPokemonName(i).then((res) => console.log('res', res))
          //      }
          // })
     // })

     async function readData() {
          const pokemon = []
          api.getNumPokemon().then((numPokemon) => {
               for (let index = 0; index < numPokemon; index++) {
                    console.log("getting into the for loop! pushing to pokemon")
                    pokemon.push({index})
                    api.getPokemonName(index + 1).then((res) => {
                         pokemon[index].name = res
                    })
                    // Promise.resolve(api.getPokemonSprite(num)).then((sprite) => {
                    //      pokemon[index].sprite = sprite
                    // })
                    // Promise.resolve(api.getPokemonNumber(num)).then((number) => {
                    //      pokemon[index].number = formatNumber(number)
                    // })
                    // Promise.resolve(api.getPokemonTypes(num)).then((types) => {
                    //      pokemon[index].types = formatTypes(types)
                    // })
                    // Promise.resolve(api.getPokemonDescription(num)).then((description) => {
                    //      pokemon[index].description = description
                    // })
               }
          })
          console.log('test pokemon', pokemon.join(' '))
          setResult(pokemon)
     }

     console.log("result length is", result.length)

     if (result.length > 0) {
          return (
               <div className="content">
                    <ResponsiveCarousel pokemonList={result} api={api}/>
               </div>
          )
     } else {
          return (
               <div/>
          )
     }

}

export default Content

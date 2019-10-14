import React, {useState, useEffect} from 'react'
import { Carousel } from 'react-responsive-carousel';
import { pokemon } from '../Content.js'

import './Carousel.css'

function ResponsiveCarousel() {
     const [pokemonList, setPokemonList] = useState([]);

     function onFocusChange(e) {
          console.log("new index is " + e)
     }

     useEffect(() => {
          let result = [];
          let index = 0;
          console.log("pokemon list pre-parse is ")
          console.log(pokemon)
          pokemon.forEach((pokemon) => {
               result.push(Pokemon(
                    'http://lorempixel.com/output/cats-q-c-640-480-3.jpg',
                    pokemon,
                    '#001',
                    'fire',
                    'description!',
                    index
               ));
               index++;
          })
          setPokemonList([result])
     }, [])

     return (
         <Carousel
         className="Carousel"
         axis="vertical"
         onChange={onFocusChange}
         onClickItem={onFocusChange}
         showArrows={false}
         showThumbs={false}
         showIndicators={false}
         showStatus={false}
         useKeyboardArrows={true}
         width="100%"
         centerMode={true}>
         {pokemonList.map((obj, index) => {
             return (
               <div key={index}>
               {obj}
               </div>
             )
        })}
      </Carousel>
)
}

function Pokemon(pokemonIconSrc, name, pokemonNumber, pokemonType, pokemonDescription, index) {
     return (
          <div key={index} className="Pokemon">
            <div className="PokemonHeader">
               <img src={pokemonIconSrc} />
               <div className="PokemonName">
                 {name}
               </div>
               <div className="PokemonNumberAndType">
                 {pokemonNumber} {pokemonType}
               </div>
            </div>
            <div className="PokemonDescription">
               {pokemonDescription}
            </div>
          </div>
     );
}

export default ResponsiveCarousel

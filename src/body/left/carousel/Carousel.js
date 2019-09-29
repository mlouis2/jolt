import React from 'react'
import { Carousel } from 'react-responsive-carousel';

import './Carousel.css'

const ResponsiveCarousel = () => (
   <Carousel
   className="Carousel"
   axis="vertical"
   showArrows={false}
   showThumbs={false}
   showIndicators={false}
   showStatus={false}
   useKeyboardArrows={true}
   width="100%"
   centerMode={true}>
   <div className="Pokemon">
     <div className="PokemonHeader">
        <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
        <div className="PokemonName">
          Bulbasaur
        </div>
        <div className="PokemonNumber">
          (#001)
          <div className="PokemonType">
          </div>
        </div>
     </div>
     <div className="PokemonDescription">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
     </div>
   </div>
   <div className="Pokemon">
     <div className="PokemonHeader">
        <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
     </div>
   </div>
   <div className="Pokemon">
     <div className="PokemonHeader">
        <img src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
     </div>
   </div>
   <div className="Pokemon">
     <div className="PokemonHeader">
        <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
     </div>
   </div>
   <div className="Pokemon">
     <div className="PokemonHeader">
        <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
     </div>
   </div>
   <div className="Pokemon">
     <div className="PokemonHeader">
        <img src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
     </div>
   </div>
 </Carousel>
)

export default ResponsiveCarousel

import React from 'react'

import './Content.css'

import Carousel from './carousel/Carousel'
import SearchBar from './search/SearchBar'

// Note how functional components that don’t have additional logic simply return their markup.
const Content = () => (
  <div className="Content">
    <SearchBar />
    <Carousel />
  </div>
)

export default Content

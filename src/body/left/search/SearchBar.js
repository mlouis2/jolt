import React from 'react'

import './SearchBar.css'

// Note how functional components that don’t have additional logic simply return their markup.
const SearchBar = () => (
  <div className="SearchContainer">
       <input type="text" className="SearchBar">
       </input>
  </div>
)

export default SearchBar

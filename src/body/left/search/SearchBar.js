import React, {useState} from 'react';

import './SearchBar.css'
import search from '../../../images/search.png';

const SearchBar = () => (
  <div className="SearchContainer">
    <SearchInput />
  </div>
)

function SearchInput() {
  const [searchDisabled, setDisabled] = useState(true);
  const [searchInput, setInput] = useState('')

  function handleTextInput(e) {
    setDisabled(e.target.value === '')
    setInput(e.target.value)
  }
  function handleSearch(e) {
    console.log("search!!!!")
  }
  return (
    <div className="SearchBarContainer">
      <input type="text" className="SearchBar" onChange={handleTextInput} placeholder="Search for a Pokémon!">
      </input>
      <button className="SearchButton" onClick={handleSearch} disabled={searchDisabled}>
        <img className="SearchIcon" src={search} alt="search"/>
      </button>
    </div>
  )
}

export default SearchBar

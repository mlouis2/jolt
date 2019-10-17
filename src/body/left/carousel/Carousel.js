import React, {useState, useEffect} from 'react'
import { Carousel } from 'react-responsive-carousel';
import { pokemon } from '../Content.js'
import { Pokemon, titleCase, formatNumber } from './Pokemon'

import './Carousel.css'
import './SearchBar.css'
import searchIcon from '../../../images/search.png';

function ResponsiveCarousel() {
    const [pokemonList, setPokemonList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [activeSearch, setActiveSearch] = useState(false);

    function onFocusChange(e) {
        // console.log("pokemon is " + filteredList[e].name);
    }

    useEffect(() => {
        let result = [];
        pokemon.forEach((pokemon, index) => {
            result.push({
                sprite: pokemon.sprite,
                name: titleCase(pokemon.name),
                number: formatNumber(pokemon.number),
                type: titleCase(pokemon.type),
                description: pokemon.description,
                index
            });
        })
        setPokemonList(result);
    }, [])

    return (
        <div>
        <div className="SearchContainer">
        <SearchInput />
        </div>
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
        {(activeSearch ? filteredList : pokemonList).map(p => {
            return (
                <div key={p.index}>
                {Pokemon(p.sprite, p.name, p.number, p.type, p.description, p.index)};
                </div>
            )
        })}
        </Carousel>
        </div>
    );

    function SearchInput() {

         const [search, setSearch] = useState({input: ''});

        useEffect(() => {
            window.addEventListener("keydown", onKeyPressed);
        }, [search])

        function onKeyPressed(event) {
            if (event.keyCode === 13 && search.input !== "") {
                handleSearch(null);
            }
        }

        function handleTextInput(e) {
            if (e.target.value === "") {
                if (activeSearch) {
                    setFilteredList(pokemonList)
                }
                setSearch({input: e.target.value});
                setActiveSearch(false);
            }
            setSearch({input: e.target.value});
        }

        function handleSearch(e) {
            setActiveSearch(true);
            setFilteredList(pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(search.input.toLowerCase())));
            console.log("search input is " + search.input);
            setSearch({input: search.input});
        }

        return (
            <div className="SearchBarContainer">
            <input type="text" className="SearchBar" onChange={handleTextInput} placeholder="Search for a Pokémon!" value={search.input}>
            </input>
            <button className="SearchButton" onClick={handleSearch} disabled={search.input === ""}>
            <img className="SearchIcon" src={searchIcon} alt="search"/>
            </button>
            </div>
        )
    }
}

export {
    ResponsiveCarousel
}

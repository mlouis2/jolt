import React, {useState, useEffect, useRef} from 'react'
import { Carousel } from 'react-responsive-carousel';
import { pokemon } from '../Content.js'
import { Pokemon, titleCase, formatNumber, formatTypes } from './Pokemon'
import DetailedView from '../../right/DetailedView'

import './Carousel.css'
import './SearchBar.css'
import searchIcon from '../../../images/search.png';

const arrowKeyCodes = [37, 38, 39, 40];

function ResponsiveCarousel() {
    const [pokemonList, setPokemonList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [activeSearch, setActiveSearch] = useState(false);
    const [search, setSearch] = useState({input: ''});
    const [currentPokemonIndex, setCurrentPokemonIndex] = useState(0);

    const indexRef = useRef();

    function onFocusChange(e) {
        indexRef.current = e;
    }

    function onClick(e) {
        indexRef.current = e;
        setCurrentPokemonIndex(e);
    }

    useEffect(() => {
        let result = [];
        pokemon.forEach((pokemon, index) => {
            result.push({
                sprite: pokemon.sprite,
                name: titleCase(pokemon.name),
                number: formatNumber(pokemon.number),
                types: formatTypes(pokemon.types),
                description: pokemon.description,
                index
            });
        })
        setPokemonList(result);
        setFilteredList(result);
        // activePokemonName = result[0].name;
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
        onClickItem={onClick}
        selectedItem={indexRef.current}
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
                {Pokemon(p.sprite, p.name, p.number, p.types, p.description, p.index)};
                </div>
            )
        })}
        </Carousel>
        <DetailedView currentPokemon={filteredList[currentPokemonIndex]}/>
        </div>
    );

    function SearchInput() {

        useEffect(() => {
            window.addEventListener("keydown", onKeyPressed);
            document.getElementById("searchBar").focus();
        }, [search])

        function onKeyPressed(event) {
            if (event.keyCode === 13 && search.input !== "") {
                handleSearch(null);
            } else if (arrowKeyCodes.includes(event.keyCode)){
                document.getElementById("searchBar").blur();
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
            setSearch({input: search.input});
        }

        return (
            <div className="SearchBarContainer">
            <input type="text" className="SearchBar" id="searchBar" onChange={handleTextInput} placeholder="Search for a Pokémon!" value={search.input}>
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

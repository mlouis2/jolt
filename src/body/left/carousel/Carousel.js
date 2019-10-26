import React, {useState, useEffect, useRef} from 'react'
import { Carousel } from 'react-responsive-carousel';
import { Pokemon } from './Pokemon'
import DetailedView from '../../right/DetailedView'

import './Carousel.css'
import './SearchBar.css'

const arrowKeyCodes = [37, 38, 39, 40];

function ResponsiveCarousel(props) {
    const pokemonList = props.pokemonList;
    const [filteredList, setFilteredList] = useState([]);
    const [search, setSearch] = useState({input: ''});
    const [currentPokemonIndex, setCurrentPokemonIndex] = useState(0);

    const indexRef = useRef();

    function onFocusChange(e) {
        indexRef.current = e;
        setCurrentPokemonIndex(e);
    }

    function onClick(e) {
        if (indexRef.current !== e) {
            indexRef.current = e;
            setCurrentPokemonIndex(e);
        }
    }

    useEffect(() => {
        setFilteredList(pokemonList);
    }, [pokemonList])

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
        {(search.input !== '' ? filteredList : pokemonList).map(p => {
            return (
                <div key={p.index}>
                {Pokemon(p.sprite, p.name, p.number, p.types, p.description, p.index)}
                </div>
            )
        })}
        </Carousel>
        <DetailedView currentPokemon={filteredList[currentPokemonIndex]} pokemonList={pokemonList} />
        </div>
    );

    function SearchInput() {

        const searchRef = useRef();

        useEffect(() => {
            window.addEventListener("keydown", onKeyPressed);
            const searchBar = document.getElementById("searchBar");
            if (searchBar) {
                searchBar.focus();
            }
        }, [])

        function onKeyPressed(event) {
            if (arrowKeyCodes.includes(event.keyCode)){
                document.getElementById("searchBar").blur();
            }
        }

        function handleTextInput(e) {
            const prev = searchRef.current;
            searchRef.current = e.target.value;
            setSearch({input: e.target.value});
            if (e.target.value === "") {
                if (prev !== '') {
                    setFilteredList(pokemonList)
                }
            } else {
                handleSearch();
            }
        }

        function handleSearch() {
            setFilteredList(pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(searchRef.current.toLowerCase())));
            indexRef.current = 0;
        }

        return (
            <div className="SearchBarContainer">
            <input type="text" className="SearchBar" id="searchBar" onChange={handleTextInput} placeholder="Search for a Pokémon!" value={search.input}>
            </input>
            </div>
        )
    }
}

export {
    ResponsiveCarousel
}

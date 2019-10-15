import React, {useState, useEffect} from 'react'
import { Carousel } from 'react-responsive-carousel';
import { pokemon } from '../Content.js'

import './Carousel.css'
import './SearchBar.css'
import searchIcon from '../../../images/search.png';

function ResponsiveCarousel() {
    const [pokemonList, setPokemonList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [activeSearch, setActiveSearch] = useState(false);

    function onFocusChange(e) {
        console.log("new index is " + e);
    }

    function titleCase(str) {
        return str.charAt(0).toUpperCase() + str.substring(1);
    }

    function formatNumber(number) {
        let strNumber = number.toString();
        while (strNumber.length < 3) {
            strNumber = "0" + strNumber;
        }
        return "#" + strNumber;
    }

    useEffect(() => {
        let result = [];
        pokemon.forEach((pokemon, index) => {
            result.push({
                sprite: pokemon.sprite,
                name: titleCase(pokemon.name),
                number: formatNumber(pokemon.number),
                type: titleCase(pokemon.type),
                description: 'description!',
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
        const [search, setSearch] = useState({disabled: true, input: ''});

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
                setSearch({disabled: true, input: e.target.value});
                setActiveSearch(false);
            }
            setSearch({disabled: false, input: e.target.value});
        }

        function handleSearch(e) {
            setActiveSearch(true);
            setFilteredList(pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(search.input.toLowerCase())));
        }

        return (
            <div className="SearchBarContainer">
            <input type="text" className="SearchBar" onChange={handleTextInput} placeholder="Search for a Pokémon!">
            </input>
            <button className="SearchButton" onClick={handleSearch} disabled={search.disabled}>
            <img className="SearchIcon" src={searchIcon} alt="search"/>
            </button>
            </div>
        )
    }
}

function Pokemon(sprite, name, id, type, description, index) {
    return (
        <div key={index} className="Pokemon">
        <div className="PokemonHeader">
        <img src={sprite} />
        <div className="PokemonName">
        {name}
        </div>
        <div className="PokemonNumberAndType">
        {id} {type}
        </div>
        </div>
        <div className="PokemonDescription">
        {description}
        </div>
        </div>
    );
}

export {
    ResponsiveCarousel
}

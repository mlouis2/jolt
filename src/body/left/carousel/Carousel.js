import React, {useState, useEffect, useRef} from 'react'
import { Carousel } from 'react-responsive-carousel';
import { Pokemon } from './Pokemon'
import DetailedView from '../../right/DetailedView'

import './Carousel.css'
import './SearchBar.css'

const verticalArrowKeyCodes = [37, 39];

function pokemonContainsSearch(search, pokemon) {
    const lowerCaseName = pokemon.name.toLowerCase();
    const lowerCaseTypes = pokemon.types.toLowerCase();
    const lowerCaseSearch = search.toLowerCase();
    return lowerCaseName.includes(lowerCaseSearch)
    || lowerCaseTypes.includes(lowerCaseSearch)
    || pokemon.number.toString().includes(search);
}

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
        <div className="searchContainer">
        <SearchInput />
        </div>
        <Carousel
        className="carousel"
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
        {(filteredList && pokemonList) ?
            (search.input !== '' ? filteredList : pokemonList).map(p => {
            return (
                <div key={p.index} data-testid={p.index}>
                {Pokemon(p.sprite, p.name, p.number, p.types, p.description, p.index)}
                <br/>
                </div>
            )
        }) : <div/>}
        </Carousel>
        {filteredList ?
            <DetailedView currentPokemon={filteredList[currentPokemonIndex]} pokemonList={pokemonList} />
            : <div/>
        }
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
            if (verticalArrowKeyCodes.includes(event.keyCode)){
                document.getElementById('searchBar').blur();
            }
        }

        function handleTextInput(e) {
            const prev = searchRef.current;
            searchRef.current = e.target.value;
            setSearch({input: e.target.value});
            if (e.target.value === '') {
                if (prev !== '') {
                    setFilteredList(pokemonList)
                }
            } else {
                handleSearch();
            }
        }

        function handleSearch() {
            if (pokemonList) {
                setFilteredList(pokemonList.filter((pokemon) => {
                    return pokemonContainsSearch(searchRef.current, pokemon);
                }));
            }
            indexRef.current = 0;
        }

        return (
            <div className="searchBarContainer">
            <input type="text" data-testid="searchBar" className="searchBar" id="searchBar" onChange={handleTextInput} placeholder="Search for a Pokémon!" value={search.input}>
            </input>
            </div>
        )
    }
}

export default ResponsiveCarousel

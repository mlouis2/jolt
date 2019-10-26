import React from 'react'

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

function formatTypes(types) {
    return types.map(s => titleCase(s)).join('/');
}

function Pokemon(sprite, name, number, types, description, index) {
    const imgAlt = "Image of the Pokémon " + name + ".";
    return (
        <div key={index} className="Pokemon">
        <div className="PokemonHeader">
        <img src={sprite} alt={imgAlt}/>
        <div className="PokemonName">
        {name}
        </div>
        <div className="PokemonNumberAndType">
        {number} {types}
        </div>
        </div>
        <div className="PokemonDescription">
        {name} is {number}, a {types.toLowerCase()} Pokémon. {description}
        </div>
        </div>
    );
}

export {
    Pokemon,
    titleCase,
    formatNumber,
    formatTypes,
};

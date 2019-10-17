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
        {name} is {id}, a {type} Pokémon. {description} Click to see {name}&apos;s
        moves and evolution.
        </div>
        </div>
    );
}

export {
    Pokemon,
    titleCase,
    formatNumber
};

import fakeData from "./fakeData.json";

const data = fakeData;

function getNumPokemon() {
  return data.count;
}

async function getPokemonInfo(index) {
  return {
    name: data[index.toString()].name,
    types: data[index.toString()].types,
    number: data[index.toString()].number,
    sprite: data[index.toString()].sprite,
    description: data[index.toString()].description,
    index
  };
}

async function getPokemonMoves(index) {
  return data[index.toString()].moves;
}

async function getPokemonEvolution(index) {
  return data[index.toString()].evolution;
}

export default {
  getNumPokemon,
  getPokemonInfo,
  getPokemonMoves,
  getPokemonEvolution
};

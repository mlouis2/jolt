import fakeData from "./fakeData.json";

const data = fakeData;

async function getNumPokemon() {
  return Promise.resolve(data.count);
}

async function getPokemonName(index) {
  return Promise.resolve(data[index.toString()].name);
}

async function getPokemonTypes(index) {
  return Promise.resolve(data[index.toString()].types);
}

async function getPokemonNumber(index) {
  return Promise.resolve(data[index.toString()].number);
}

async function getPokemonSprite(index) {
  return Promise.resolve(data[index.toString()].sprite);
}

async function getPokemonDescription(index) {
  return Promise.resolve(data[index.toString()].description);
}

async function getPokemonMoves(index) {
  return Promise.resolve(data[index.toString()].moves);
}

async function getPokemonEvolution(index) {
  return Promise.resolve(data[index.toString()].evolution);
}

export default {
  getNumPokemon,
  getPokemonName,
  getPokemonTypes,
  getPokemonNumber,
  getPokemonSprite,
  getPokemonDescription,
  getPokemonMoves,
  getPokemonEvolution
};

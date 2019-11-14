import fakeData from "./fakeData.json";

const data = fakeData;

async function getPokemonInfo(index) {
  if (index < 0) {
    throw new Error(`Error in getting info for Pokemon #${index}`);
  }
  const indexAsString = index.toString();
  await data;
  return {
    name: data[indexAsString].name,
    types: data[indexAsString].types,
    number: data[indexAsString].number,
    sprite: data[indexAsString].sprite,
    description: data[indexAsString].description,
    index
  };
}

async function getPokemonMoves(index) {
  if (index < 0) {
    throw new Error(`Error in getting moves for Pokemon #${index}`);
  }
  return data[index.toString()].moves;
}

async function getPokemonEvolution(index) {
  if (index < 0) {
    throw new Error(`Error in getting evolution for Pokemon #${index}`);
  }
  return data[index.toString()].evolution;
}

export default {
  getPokemonInfo,
  getPokemonMoves,
  getPokemonEvolution
};

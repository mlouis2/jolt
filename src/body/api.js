const memoized = {};
const nameToIndex = {};

async function getNumPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const responseJson = await response.json();
  return 20;
}

function getDescription(json) {
  const flavor_text_entries = json.flavor_text_entries;
  for (let i = 0; i < flavor_text_entries.length; i++) {
    if (flavor_text_entries[i].language.name === "en") {
      return flavor_text_entries[i].flavor_text;
    }
  }
  return "";
}

async function getPokemonInfo(index) {
  if (memoized[index]) {
    console.log("using memoized info");
    return {
      name: memoized[index].name,
      types: memoized[index].types,
      index,
      sprite: memoized[index].sprite
    };
  }
  const url = `https://pokeapi.co/api/v2/pokemon/${index}`;
  const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${index}`;
  const response = await fetch(url);
  const speciesResponse = await fetch(speciesUrl);
  const responseJson = await response.json();
  const speciesResponseJson = await speciesResponse.json();

  const types = responseJson.types.map(type => type.type.name);
  nameToIndex[responseJson.name] = index;
  const obj = {
    name: responseJson.name,
    types: types,
    index,
    sprite: responseJson.sprites.front_default,
    description: getDescription(speciesResponseJson)
  };
  memoized[index] = obj;
  return obj;
}

async function getPokemonMoves(index) {
  if (memoized[index].moves) {
    console.log("using memoized moves");
    return memoized[index].moves;
  }
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
  const responseJson = await response.json();
  const moves = [];
  for (let i = 0; i < responseJson.moves.length; i++) {
    const move = responseJson.moves[i];
    const moveResponse = await fetch(move.move.url);
    const moveResponseJson = await moveResponse.json();
    console.log("move response json", moveResponseJson);
    const types = moveResponseJson.type.name;
    moves.push({
      name: move.move.name,
      description: getDescription(moveResponseJson),
      types
    });
  }
  memoized[index].moves = moves;
  return moves;
}

async function getPokemonEvolution(index) {
  if (memoized[index].evolution) {
    console.log("using memoized evolution ");
    return memoized[index].evolution;
  }
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${index}`
  );
  const responseJson = await response.json();

  const evolutionResponse = await fetch(responseJson.evolution_chain.url);
  const evolutionResponseJson = await evolutionResponse.json();
  console.log("evolution response json is ", evolutionResponseJson);
  let evolves_to = evolutionResponseJson.chain.evolves_to;
  const chain = [nameToIndex[evolutionResponseJson.chain.species.name]];
  while (evolves_to.length > 0) {
    console.log("evolves to chain");
    chain.push(nameToIndex[evolves_to[0].species.name]);
    evolves_to = evolves_to[0].evolves_to;
  }
  memoized[index].evolution = chain;
  console.log("chain is ", chain);
  return chain;
}

export default {
  getNumPokemon,
  getPokemonInfo,
  getPokemonMoves,
  getPokemonEvolution
};

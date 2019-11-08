const memoized = {};
const nameToIndex = {};

function getNumPokemon() {
  return 90;
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
    return {
      name: memoized[index].name,
      types: memoized[index].types,
      index,
      sprite: memoized[index].sprite
    };
  }
  const url = `https://pokeapi.co/api/v2/pokemon/${index}`;
  const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${index}`;
  const response = await fetch(url).catch(err => {
    throw `Error in getting info for Pokemon #${index}`;
  });
  const speciesResponse = await fetch(speciesUrl).catch(err => {
    throw `Error in getting species for Pokemon #${index}`;
  });
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
    return memoized[index].moves;
  }
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${index}`
  ).catch(err => {
    throw `Error in getting info for Pokemon #${index}`;
  });
  const responseJson = await response.json();
  const moves = [];
  for (let i = 0; i < Math.min(10, responseJson.moves.length); i++) {
    const move = responseJson.moves[i];
    const moveResponse = await fetch(move.move.url).catch(err => {
      throw `Error in getting moves for Pokemon #${index}`;
    });
    const moveResponseJson = await moveResponse.json();
    const type = moveResponseJson.type.name;
    moves.push({
      name: move.move.name,
      description: getDescription(moveResponseJson),
      type
    });
  }
  memoized[index].moves = moves;
  return moves;
}

async function getPokemonEvolution(index) {
  if (memoized[index].evolution !== undefined) {
    return memoized[index].evolution;
  }
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${index}`
  ).catch(err => {
    throw `Error in getting species for Pokemon #${index}`;
  });
  const responseJson = await response.json();

  const evolutionResponse = await fetch(responseJson.evolution_chain.url).catch(
    err => {
      throw `Error in getting evolution chain for Pokemon #${index}`;
    }
  );
  const evolutionResponseJson = await evolutionResponse.json();
  let evolves_to = evolutionResponseJson.chain.evolves_to;
  const chain = [nameToIndex[evolutionResponseJson.chain.species.name]];
  while (evolves_to.length > 0) {
    chain.push(nameToIndex[evolves_to[0].species.name]);
    evolves_to = evolves_to[0].evolves_to;
  }
  memoized[index].evolution = chain;
  return chain;
}

export default {
  getNumPokemon,
  getPokemonInfo,
  getPokemonMoves,
  getPokemonEvolution
};

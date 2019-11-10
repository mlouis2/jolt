const MEMOIZED_KEY = "memo";
const NAME_TO_INDEX_KEY = "nameToIndex";

let memoized = {};
let nameToIndex = {};

const localStorage = window.localStorage;
if (localStorage.getItem(MEMOIZED_KEY) !== null) {
  memoized = JSON.parse(localStorage.getItem(MEMOIZED_KEY));
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
  if (memoized[index] !== undefined) {
    return {
      name: memoized[index].name,
      types: memoized[index].types,
      index,
      sprite: memoized[index].sprite,
      description: memoized[index].description
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
  const obj = {
    name: responseJson.name,
    types: types,
    index,
    sprite: responseJson.sprites.front_default,
    description: getDescription(speciesResponseJson)
  };
  memoized[index] = obj;
  localStorage.setItem(MEMOIZED_KEY, JSON.stringify(memoized));
  return obj;
}

async function getPokemonMoves(index) {
  if (memoized[index].moves !== undefined) {
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
  localStorage.setItem(MEMOIZED_KEY, JSON.stringify(memoized));
  return moves;
}

function getNameFromUrl(url) {
  let ans = "";
  for (let i = url.length - 2; i > 0; i--) {
    if (url.charAt(i) === "/") {
      break;
    }
    ans = url.charAt(i) + ans;
  }
  return ans;
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
  const chain = [getNameFromUrl(evolutionResponseJson.chain.species.url)];
  while (evolves_to.length > 0) {
    if (getNameFromUrl(evolves_to[0].species.name) !== undefined) {
      chain.push(getNameFromUrl(evolves_to[0].species.url));
    }
    evolves_to = evolves_to[0].evolves_to;
  }
  memoized[index].evolution = chain;
  localStorage.setItem(MEMOIZED_KEY, JSON.stringify(memoized));
  return chain;
}

export default {
  getPokemonInfo,
  getPokemonMoves,
  getPokemonEvolution
};

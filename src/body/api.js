async function getNumPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const responseJson = await response.json()
    return 3
}

async function getPokemonName(index) {
    const url = `https://pokeapi.co/api/v2/pokemon/${index}`
    const response = await fetch(url)
    console.log("getting json")
    const responseJson = await response.json()
    return responseJson.name
}

async function getPokemonTypes(index) {
    return Promise.resolve(["fire", "water"])
    // const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
    // const responseJson = await response.json()
    // return responseJson.types
}

async function getPokemonNumber(index) {
    return Promise.resolve(index)
}

async function getPokemonSprite(index) {
    return Promise.resolve("")
    // return Promise.resolve(fetch('http://pokeapi.co/api/v2/pokemon/index')
    // .then((response) => response.json().then((responseJson) => responseJson.sprites.front_default)))
}

async function getPokemonDescription(index) {
    return Promise.resolve("blah blah blah")
    // return Promise.resolve(fetch('http://pokeapi.co/api/v2/pokemon-species/index')
    // .then((response) => response.json().then((responseJson) => responseJson.count)))
}

async function getPokemonMoves(index) {
    return Promise.resolve([{
            "name": "razor-wind",
            "description": "Inflicts regular damage. User's critical hit rate is one level higher when using this move. User charges for one turn before attacking. This move cannot be selected by sleep talk.",
            "types": [
                "normal"
            ]
        }])
    // return Promise.resolve(fetch('http://pokeapi.co/api/v2/pokemon/index')
    // .then((response) => response.json().then((responseJson) => responseJson.moves)))
}

async function getPokemonEvolution(index) {
    return Promise.resolve([1, 2, 3])
    // return Promise.resolve(fetch('http://pokeapi.co/api/v2/evolution-chain/index')
    // .then((response) => response.json().then((responseJson) => responseJson.evolution)))
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
}

// const getData = () => {
//     fetch('http://pokeapi.co/api/v2/pokemon?limit=20').then(res=>res.json())
//     .then(response=>{
//       const data = {}
//       data.length = 20 // eventually should be response.count
//       for (let index = 0; index < response.results.length; index++) {
//           const number = index + 1
//           data[number] = {}
//           data[number].name = response.results[index].name
//           data[number].number = number
//           fetch(response.results[index].url).then(res=>res.json())
//           .then(pokeResponse=>{
//               data[number].sprite = pokeResponse.sprites.front_default
//               data[number].types = []
//               pokeResponse.types.forEach(type => {
//                   data[number].types.push(type.type.name)
//               })
//               fetch(pokeResponse.species.url).then(res=>res.json())
//               .then(pokeSpeciesResponse=>{
//                   let language = ''
//                   let index = 1
//                   // while (language !== 'en') {
//                   //   console.log("stuck?")
//                   //   language = pokeSpeciesResponse.flavor_text_entries[index].language.name
//                   // }
//                   data[number].description = pokeSpeciesResponse.flavor_text_entries[index].flavor_text
//               });
//           });
//           data[number].evolution = [1, 2, 3]
//           data[number].moves = [{
//                   "name": "razor-wind",
//                   "description": "Inflicts regular damage. User's critical hit rate is one level higher when using this move. User charges for one turn before attacking. This move cannot be selected by sleep talk.",
//                   "types": [
//                       "normal"
//                   ]
//               }]
//       }
//
//       return data
//     });
// }
//
// export default getData

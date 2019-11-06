const getData = () => {
    fetch('http://pokeapi.co/api/v2/pokemon?limit=20').then(res=>res.json())
    .then(response=>{
      const data = {}
      data.length = 20 // eventually should be response.count
      for (let index = 0; index < response.results.length; index++) {
          const number = index + 1
          data[number] = {}
          data[number].name = response.results[index].name
          data[number].number = number
          fetch(response.results[index].url).then(res=>res.json())
          .then(pokeResponse=>{
              data[number].sprite = pokeResponse.sprites.front_default
              data[number].types = []
              pokeResponse.types.forEach(type => {
                  data[number].types.push(type.type.name)
              })
              fetch(pokeResponse.species.url).then(res=>res.json())
              .then(pokeSpeciesResponse=>{
                  let language = ''
                  let index = 1
                  // while (language !== 'en') {
                  //   console.log("stuck?")
                  //   language = pokeSpeciesResponse.flavor_text_entries[index].language.name
                  // }
                  data[number].description = pokeSpeciesResponse.flavor_text_entries[index].flavor_text
              });
          });
          data[number].evolution = [1, 2, 3]
          data[number].moves = [{
                  "name": "razor-wind",
                  "description": "Inflicts regular damage. User's critical hit rate is one level higher when using this move. User charges for one turn before attacking. This move cannot be selected by sleep talk.",
                  "types": [
                      "normal"
                  ]
              }]
      }

      return data
    });
}

export default getData

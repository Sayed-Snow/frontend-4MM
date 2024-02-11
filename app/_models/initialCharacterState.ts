const initialStateCharacterResponse: CharacterResponse = {
    count: 0,
    next: null,
    previous: null,
    results: [],
  };

const initialStateCharacter: Character = {
    name: "",
    height: "",
    mass: "",
    hair_color: "",
    skin_color: "",
    eye_color: "",
    birth_year: "",
    gender: "",
    homeworld: "",
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    created: "",
    edited: "",
    url: "",
  };
  
  export{
    initialStateCharacter,initialStateCharacterResponse
  }
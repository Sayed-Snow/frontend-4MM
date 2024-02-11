import { initialStateCharacter, initialStateCharacterResponse } from "@/app/_models/initialCharacterState";
import { PayloadAction, createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface SearchState {
    searchTerm: string;
    characterResponse: CharacterResponse;
    character: Character;
    error: string | null; 
  }
  

  
const initialState: SearchState = {
    searchTerm: '',
    characterResponse: initialStateCharacterResponse,
    character: initialStateCharacter,
    error: null,
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers:{
        searchReducer: (state, action:PayloadAction<string>) =>{
            state.searchTerm = action.payload
        },
        characterInfoReducer:(state, action:PayloadAction<Character>)=>{
            state.character = action.payload
            state.characterResponse = initialStateCharacterResponse
            state.searchTerm = ''
        },
    },
    extraReducers(builder) {
        builder
        .addCase(fetchCharactersReducer.rejected,(state,action)=>{
            console.log('ERROR')
        })
        .addCase(fetchCharactersReducer.pending,(state,action)=>{
            console.log('Loading')
        })
        .addCase(fetchCharactersReducer.fulfilled,(state,action:PayloadAction<CharacterResponse>)=>{
            state.characterResponse = action.payload
        })
    },
});
export const fetchCharactersReducer = createAsyncThunk(
    'search/fetchCharacters',
    async (searchText:string) => {
       return await axios.get(`https://swapi.dev/api/people/?search=${searchText}`).then(resp => resp.data)
    }
  );

export const {searchReducer, characterInfoReducer} = searchSlice.actions;

export default searchSlice.reducer;


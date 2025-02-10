import { createSlice } from "@reduxjs/toolkit";
import MOCK_DATA from "../../data/pokemonData";


const initialState = {
  pokemonData: MOCK_DATA,
  selectiedPokemons: JSON.parse(localStorage.getItem("pokemon")) || []
}

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      const pokemon = action.payload;
      if (state.selectiedPokemons.length < 6 && !state.selectiedPokemons.some(p => p.id === pokemon.id)) {
        state.selectiedPokemons.push(pokemon);
      } else if (state.selectiedPokemons.some(p => p.id === pokemon.id)) {
        alert("이미 잡은 포켓몬 입니다!")
      } else {
        alert("최대 6마리까지만 잡을 수 있습니다!");
      }
    },
    removePokemon: (state, action) => {
      state.selectiedPokemons = state.selectiedPokemons.filter(pokemon => pokemon.id !== action.payload)
    },
    setPokemonData: (state, action) => {
      state.pokemonData = action.payload;
    },
  }
})

export const { addPokemon, removePokemon, setPokemonData } = pokemonSlice.actions;
export default pokemonSlice.reducer;
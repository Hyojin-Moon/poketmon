import { createSlice } from "@reduxjs/toolkit";
import MOCK_DATA from "../../data/pokemonData";
import { toast } from "react-toastify";


const initialState = {
  pokemonData: MOCK_DATA,
  selectedPokemons: JSON.parse(localStorage.getItem("pokemon")) || [],
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      const pokemon = action.payload;
      if (state.selectedPokemons.length < 6 && !state.selectedPokemons.some(p => p.id === pokemon.id)) {
        state.selectedPokemons.push(pokemon);
        localStorage.setItem("pokemon", JSON.stringify(state.selectedPokemons));
      } else if (state.selectedPokemons.some(p => p.id === pokemon.id)) {
        toast.warn("이미 잡은 포켓몬 입니다!")
      } else {
        toast.warn("최대 6마리까지만 잡을 수 있습니다!");
      }
    },
    removePokemon: (state, action) => {
      state.selectedPokemons = state.selectedPokemons.filter(pokemon => pokemon.id !== action.payload)
      localStorage.setItem("pokemon", JSON.stringify(state.selectedPokemons));
    },
  }
});

export const { addPokemon, removePokemon, setPokemonData, pokemonData } = pokemonSlice.actions;
export default pokemonSlice.reducer;
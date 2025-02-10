import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  }
})

export default store;
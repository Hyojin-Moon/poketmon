import { createContext } from "react";

export const PokemonContext = createContext();

function PokemonProvider ({children}) {
  return {children}
};

export default PokemonProvider;
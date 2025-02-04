import { useState } from 'react'
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import styled from 'styled-components';
import MOCK_DATA from '../data/pokemonData'


const DexContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-direction: column;
`

const Dex = () => {
  //Dex에서 상태관리하고 props로 List에 내려주기
  const [pokemonData, setPokemonData] = useState(MOCK_DATA);
  const [selectedPokemons, setSelectedPokemons] = useState([]);

  const addPokemon = (pokemon) => {
    if (selectedPokemons.length < 6 && !selectedPokemons.some(p => p.id === pokemon.id)) {
      setSelectedPokemons([...selectedPokemons, pokemon]);
    } else {
      alert("최대 6마리까지만 선택 가능합니다.");
    }
  };

  // 포켓몬 삭제 함수
  const removePokemon = (id) => {
    setSelectedPokemons(selectedPokemons.filter(pokemon => pokemon.id !== id));
  };

  return (
    <DexContainer>
      <Dashboard selectedPokemons={selectedPokemons} removePokemon={removePokemon}/>
      <PokemonList pokemonData={pokemonData} addPokemon={addPokemon}/>
    </DexContainer>
  )
}

export default Dex
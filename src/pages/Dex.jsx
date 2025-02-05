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

  //포켓몬 추가 함수
  const addPokemon = (pokemon) => {
    if (selectedPokemons.length < 6 && !selectedPokemons.some(p => p.id === pokemon.id)) {
      setSelectedPokemons([...selectedPokemons, pokemon]);
    } else if (selectedPokemons.some(p => p.id === pokemon.id)) {
      alert("이미 잡은 포켓몬 입니다!")
    } else {
      alert("최대 6마리까지만 잡을 수 있습니다!");
    }
  };

  // 포켓몬 삭제 함수
  const removePokemon = (id) => {
    setSelectedPokemons(selectedPokemons.filter(pokemon => pokemon.id !== id));
  };

  return (
    <DexContainer>
      <Dashboard selectedPokemons={selectedPokemons} pokemonData={pokemonData} removePokemon={removePokemon}/>
      <PokemonList pokemonData={pokemonData} addPokemon={addPokemon}/>
    </DexContainer>
  )
}

export default Dex
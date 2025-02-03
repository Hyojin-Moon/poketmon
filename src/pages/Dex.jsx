import { useState } from 'react'
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import styled from 'styled-components';
import MOCK_DATA from '../data/pokemonData'


const DexContainer = styled.div`
  display: flex;
  gap: 16px;

`

const Dex = () => {
  //Dex에서 상태관리하고 props로 List에 내려주기
  const [pokemonData, setPokemonData] = useState(MOCK_DATA);


  return (
    <DexContainer>
      <Dashboard />
      <PokemonList pokemonData={pokemonData}/>
    </DexContainer>
  )
}

export default Dex
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import styled from 'styled-components';

const DexContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-direction: column;
`

const Dex = () => {

  return (
    <DexContainer>
      <Dashboard  />
      <PokemonList />
    </DexContainer>
  )
}

export default Dex;
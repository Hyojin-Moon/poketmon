import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import styled from 'styled-components';

const Dex = () => {

  return (
    <StDexContainer>
      <Dashboard />
      <PokemonList />
    </StDexContainer>
  );
};

export default Dex;

const StDexContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-direction: column;
`;
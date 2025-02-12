
import styled from 'styled-components';
import PokemonCard from './PokemonCard';
import MOCK_DATA from '../data/pokemonData';

const PokemonList = () => {
  return (
    <StListContainer>
      <StContainer>
        {MOCK_DATA.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </StContainer>
    </StListContainer>
  );
};
export default PokemonList;


const StListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 960px;
  margin: 20px auto;
  padding: 20px;
  border: 2px solid #ddd;
  border-radius: 10px;
  background-color: #fefefe;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 960px) {
    max-width: 90%; /* 너비를 줄여서 화면에 맞춤 */
    padding: 15px;
  }

  @media (max-width: 768px) {
    max-width: 95%;
    padding: 10px;
    margin: 10px auto;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 5px;
    margin: 5px auto;
  }


`;
const StContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  width: 100%;
`;
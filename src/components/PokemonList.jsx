/* eslint-disable react/prop-types */

import styled from 'styled-components';
import PokemonCard from './PokemonCard';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 960px;
  padding: 20px;
  border: 2px solid #ddd;
  border-radius: 10px;
  background-color: #fefefe;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 15px; 
  width: 100%;
  justify-content: center;
`;

const PokemonList = ({ pokemonData, addPokemon }) => {

  return (
    <ListContainer>
      <Container>
      {pokemonData.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} addPokemon={addPokemon} />
      ))}
      </Container>
    </ListContainer>
  );
};
export default PokemonList;
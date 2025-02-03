import styled from 'styled-components';
import PokemonCard from './PokemonCard';

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 20px;
`;

const PokemonList = ({ pokemonData }) => {

  return (
    <ListContainer>
    {pokemonData.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </ListContainer>
  );
};
export default PokemonList;
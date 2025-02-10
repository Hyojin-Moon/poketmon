/* eslint-disable react/prop-types */

import styled from 'styled-components';
import PokemonCard from './PokemonCard';
import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { useSelector } from 'react-redux';

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

const PokemonList = () => {

  const pokemonData = useSelector(state => state.pokemon.pokemonData);

  return (
    <ListContainer>
      <Container>
        {pokemonData.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Container>
    </ListContainer>
  );
};
export default PokemonList;
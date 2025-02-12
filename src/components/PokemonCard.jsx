/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addPokemon } from '../redux/slices/pokemonSlice';
import { StButton, StPokemonImage, StPokemonName, StPokemonID } from '../css/GlobalStyle.js';

const PokemonCard = ({ pokemon }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 포켓몬 클릭시 이동
  const handleCardClick = () => {
    navigate(`/pokemon?id=${pokemon.id}`);
  };

  // 카드의 버튼(추가) 클릭시 슬롯에 추가
  const handleButtonClick = (e) => {
    e.stopPropagation();
    dispatch(addPokemon(pokemon));
  };

  return (
    <StCardContainer onClick={handleCardClick}>
      <StPokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
      <StPokemonName>{pokemon.korean_name}</StPokemonName>
      <StPokemonID>{`No. 00${pokemon.id}`}</StPokemonID>
      <StButton onClick={handleButtonClick}>추가</StButton>
    </StCardContainer>
  );
};

export default PokemonCard;

const StCardContainer = styled.div`
  width: 100%;
  max-width: 120px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05); 
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

`;

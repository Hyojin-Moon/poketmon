/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addPokemon } from '../redux/slices/pokemonSlice';

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
    <CardContainer onClick={handleCardClick}>
      <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
      <PokemonName>{pokemon.korean_name}</PokemonName>
      <PokemonID>{`No. 00${pokemon.id}`}</PokemonID>
      <Button onClick={handleButtonClick}>추가</Button>
    </CardContainer>
  )
};

export default PokemonCard;

const CardContainer = styled.div`
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

const PokemonImage = styled.img`
  width: 100px;
  height: 100px;
`;
const PokemonName = styled.div`
  margin-bottom: 15px;
`
const PokemonID = styled.div`
  margin: 15px;
  color: gray;
`;
const Button = styled.button`
  background-color: red;
  color: white;
  border: none;
  width: 50px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ff4d4d;
  }
`;
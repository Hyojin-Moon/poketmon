import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 150px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
`
const PokemonCard = ({ pokemon, addPokemon }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokemon?id=${pokemon.id}`);
  }

  return (
    <CardContainer onClick={handleClick}>
    <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
    <PokemonName>{pokemon.korean_name}</PokemonName>
    <PokemonID>{`No. 00${pokemon.id}`}</PokemonID>
    <Button onClick={()=>{addPokemon(pokemon)}}>추가</Button>
  </CardContainer>
  )
};

export default PokemonCard
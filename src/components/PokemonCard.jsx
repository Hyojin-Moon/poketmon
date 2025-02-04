import styled from 'styled-components';

const CardContainer = styled.div`
  width: 150px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  background-color: #f8f8f8;
`;

const PokemonImage = styled.img`
  width: 100px;
  height: 100px;
`;


const PokemonCard = ({ pokemon }) => {
  return (
    <CardContainer>
    <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
    <h3>{pokemon.korean_name}</h3>
    <button>추가</button>
  </CardContainer>
  )
};

export default PokemonCard
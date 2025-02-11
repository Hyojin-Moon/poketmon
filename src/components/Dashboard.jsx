/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { removePokemon } from '../redux/slices/pokemonSlice.js';
import { StContainer, StButton, StPokemonImage, StPokemonName, StPokemonID } from '../css/GlobalStyle.js'
const Dashboard = () => {

  const selectedPokemons = useSelector((state) => state.pokemon.selectedPokemons);
  const dispatch = useDispatch();

  const imgDefault = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png"

  // 기본 포켓몬 이미지를 6개로 설정
  const filledPokemons = selectedPokemons.slice(); // 복사
  while (filledPokemons.length < 6) {
    filledPokemons.push(null); //빈칸으로 슬롯 추가
  }

  // 페이지이동
  const navigate = useNavigate();

  const handleCardClick = (pokemon) => {
    navigate(`/pokemon?id=${pokemon.id}`);
  };

  return (
    <StDashboardContainer>
      <h2>나만의 포켓몬</h2>
      <StSlotContainer>
        {filledPokemons.map((pokemon, index) => {
          const isEmpty = pokemon === null; // null 체크용 변수

          return (
            <StPokemonSlot
              onClick={() => handleCardClick(pokemon)}
              key={isEmpty ? `empty-${index}` : pokemon.id}>
              <StPokemonImage src={isEmpty ? imgDefault : pokemon.img_url} />
              <StPokemonName>{isEmpty ? null : pokemon.korean_name}</StPokemonName>
              <StPokemonID>{isEmpty ? null : `No. 00${pokemon.id}`}</StPokemonID>
              {!isEmpty && <StButton onClick={(e) => {
                e.stopPropagation();
                dispatch(removePokemon(pokemon.id));
              }}>삭제</StButton>}
            </StPokemonSlot>
          );
        })}
      </StSlotContainer>
    </StDashboardContainer>
  );
};

export default Dashboard;

const StDashboardContainer = styled(StContainer)`

  & h2 {
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #9b2d2d;
  }
`;

const StSlotContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  width: 100%;

  @media (max-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 5px;
  }
`;
const StPokemonSlot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed #ccc; /* 점선 테두리 */
  padding: 10px;
  border-radius: 8px;
  min-width: 120px;
  min-height: 150px;
  background-color: #f9f9f9;
  cursor: pointer;
`;
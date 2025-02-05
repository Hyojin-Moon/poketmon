/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const DashboardContainer = styled.div`
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
`;
const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #9b2d2d;
`;

const SlotContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  width: 100%;
`;
const PokemonSlot = styled.div`
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
`;
const PokemonImg = styled.img`
  width: 80px;
  height: 80px;
`;

const PokemonName = styled.p`
  font-weight: bold;
  margin: 5px 0;
`;

const PokemonID = styled.p`
  font-size: 14px;
  color: #666;
`;

const Button = styled.button`
  margin-top: 8px;
  padding: 5px 10px;
  font-size: 14px;
  border: none;
  background-color: #ff6b6b;
  color: white;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #ff4d4d;
  }
`;
const Dashboard = ({ selectedPokemons, removePokemon }) => {

  const imgDefault = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png"
  // 기본 포켓몬 이미지를 6개로 설정
  const filledPokemons = selectedPokemons.slice(); // 복사
  while (filledPokemons.length < 6) {
    filledPokemons.push(null); //빈칸으로 슬롯 추가
  }

  return (
    <DashboardContainer>
      <Title>나만의 포켓몬</Title>
      <SlotContainer>
        {filledPokemons.map((pokemon, index) => {
          const isEmpty = pokemon === null; // null 체크용 변수

          return (
            <PokemonSlot key={isEmpty ? `empty-${index}` : pokemon.id}>
              <PokemonImg src={isEmpty ? imgDefault : pokemon.img_url} />
              <PokemonName>{isEmpty ? null : pokemon.korean_name}</PokemonName>
              <PokemonID>{isEmpty ? null : `No. 00${pokemon.id}`}</PokemonID>
              {!isEmpty && <Button onClick={() => removePokemon(pokemon.id)}>삭제</Button>}
            </PokemonSlot>
          );
        })}
        </SlotContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
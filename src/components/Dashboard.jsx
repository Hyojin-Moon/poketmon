import styled from 'styled-components'

const DashboardContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  gap: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const PokemonImg = styled.img`
  width: 100px;
  height: 100px;
`;
const PokemonSlot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
`;
const PokemonName = styled.div`
  margin-bottom: 15px;
`
const PokemonID = styled.div`
  margin-bottom: 15px;
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
const Dashboard = ({ selectedPokemons, removePokemon }) => {

  const imgDefault = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png"
  // 기본 포켓몬 이미지를 6개로 설정
  const filledPokemons = selectedPokemons.slice(); // 복사
  while (filledPokemons.length < 6) {
    filledPokemons.push(null); //빈칸으로 슬롯 추가
  }


  return (
    <DashboardContainer>
      {filledPokemons.map((pokemon, index) => {
        const isEmpty = pokemon === null; // null 체크용 변수

        return (
          <PokemonSlot key={isEmpty ? `empty-${index}` : pokemon.id}>
            {/* 빈값이면 기본이미지, 아니면 포켓몬정보 */}
            <PokemonImg src={isEmpty ? imgDefault : pokemon.img_url} />
            <PokemonName>{isEmpty? null : pokemon.korean_name}</PokemonName>
            <PokemonID>{isEmpty? null : `No. 00${pokemon.id}`}</PokemonID>
            {/* 빈값이 아닐때만 삭제버튼 표시 */}
            {!isEmpty && <Button onClick={() => removePokemon(pokemon.id)}>삭제</Button>}
          </PokemonSlot>
        );
      })}
    </DashboardContainer>
  );
};

export default Dashboard;
import styled from 'styled-components'

const DashboardContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  gap: 50px;
`;
const PokemonImg = styled.img`
  width: 100px;
  height: 100px;
`;

const Dashboard = ({selectedPokemons, removePokemon}) => {

  const imgDefault = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png"
  // 기본 포켓몬 이미지를 6개로 설정
  const defaultPokemons = Array(6).fill(imgDefault);

  return (
    <DashboardContainer>
      {selectedPokemons.map((pokemon) => (
        <div key={pokemon.id}>
          <PokemonImg
            src={pokemon.img_url}
            alt={pokemon.korean_name}
          />
          <button onClick={()=>{removePokemon(pokemon.id)}}>삭제</button>
        </div>
      ))}
    </DashboardContainer>
  );
};

export default Dashboard;
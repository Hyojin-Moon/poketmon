import styled from 'styled-components'

const DashboardContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
const PokemonImg = styled.img`
  width: 100px;
  height: 100px;
`

const Dashboard = ({selectedPokemons}) => {

  const imgDefault = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png"
  return (
    <DashboardContainer>
      <PokemonImg src={imgDefault} alt="" />
    </DashboardContainer>
  );
};

export default Dashboard;
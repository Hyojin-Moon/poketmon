import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {

  const navigate = useNavigate();
  const logoImg = "https://react-6-pokemon.vercel.app/assets/pokemon-logo-RN0wntMB.png";
  
  return (
    <StHomeContainer>
      <StLogoImg src={logoImg} alt="" />
      <StStartButton onClick={() => {
        navigate("/dex");
      }}>포켓몬 도감 시작하기</StStartButton>
    </StHomeContainer>
  )
}

export default Home;

const StHomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;
const StLogoImg = styled.img`
  width: 600px;
`;
const StStartButton = styled.button`
  margin-top: 15px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: #fa3030;
  cursor: pointer;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #ff5555;
  }
`;
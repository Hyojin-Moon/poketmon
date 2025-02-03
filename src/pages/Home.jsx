import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Home = () => {

  const navigate = useNavigate();

  return (
    <HomeContainer>
    <button onClick={()=>{
      navigate("/dex");
    }}>포켓몬 도감 시작하기</button>
    </HomeContainer>
  )
}

export default Home;
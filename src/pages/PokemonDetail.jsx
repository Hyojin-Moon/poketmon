import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, removePokemon } from "../redux/slices/pokemonSlice";

const PokemonDetail = () => {

  const [searchParams] = useSearchParams();
  const pokemonId = searchParams.get("id"); //쿼리스트링의 객체로 들어온 아이디값
  const navigate = useNavigate();

  //Redux 스토어에서 데이터 가져오기
  const { selectedPokemons, pokemonData } = useSelector(state => state.pokemon);
  const dispatch = useDispatch();

  // searchParams의 pokemonId값과 MOCK_DATA의 id를 비교하여 일치하면 정보 뿌려주기
  // 쿼리파라미터는 무조건 문자열 / 문자배열 / undefined
  const detailPokemonData = pokemonData.find((e) => e.id.toString() === pokemonId);

  //선택된 목록에 현재 포켓몬 있는지 확인
  const isAlreadyAdded = selectedPokemons.some((e) => e.id === detailPokemonData.id);

  // 추가/삭제 함수
  const handleAddDeleteClick = () => {
    if (isAlreadyAdded) {
      dispatch(removePokemon(detailPokemonData.id)); // 컨텍스트에서 id를 필터링
    } else {
      dispatch(addPokemon(detailPokemonData));
    }
  };

  return (
    <Container>
      <PokemonImage src={detailPokemonData.img_url} alt={detailPokemonData.korean_name} />
      <PokemonName>{detailPokemonData.korean_name}</PokemonName>
      <PokemonType>타입 : {detailPokemonData.types}</PokemonType>
      <Description>{detailPokemonData.description}</Description>
      <BackButton onClick={() => {
        navigate("/dex");
      }}>뒤로 가기</BackButton>
      <AddDeleteButton onClick={handleAddDeleteClick}>
        {isAlreadyAdded ? "삭제" : "추가"}</AddDeleteButton>
    </Container>
  );
};

export default PokemonDetail;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 20px auto;
`;

const PokemonImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  margin-bottom: 15px;
  transition: transform 0.3s ease-in-out;

&:hover {
  transform: scale(1.3); 
}
`;

const PokemonName = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const PokemonType = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  color: #333;
`;

const BackButton = styled.button`
  margin-top: 10px;
  padding: 10px 16px;
  font-size: 16px;
  border: none;
  background-color: #ff6b6b;
  color: white;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #ff4d4d;
  }
`;
const AddDeleteButton = styled.button`
  margin-top: 10px;
  padding: 10px 16px;
  font-size: 16px;
  border: none;
  background-color: #ff6b6b;
  color: white;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #ff4d4d;
  }
`
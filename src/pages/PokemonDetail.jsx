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
    <StContainer>
      <StPokemonImage src={detailPokemonData.img_url} alt={detailPokemonData.korean_name} />
      <StPokemonName>{detailPokemonData.korean_name}</StPokemonName>
      <StPokemonType>타입 : {detailPokemonData.types}</StPokemonType>
      <StDescription>{detailPokemonData.description}</StDescription>
      <StBackButton onClick={() => {
        navigate("/dex");
      }}>뒤로 가기</StBackButton>
      <StAddDeleteButton onClick={handleAddDeleteClick}>
        {isAlreadyAdded ? "삭제" : "추가"}</StAddDeleteButton>
    </StContainer>
  );
};

export default PokemonDetail;


const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 20px auto;
`;

const StPokemonImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
  margin-bottom: 15px;
  transition: transform 0.3s ease-in-out;

&:hover {
  transform: scale(1.3); 
}
`;

const StPokemonName = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const StPokemonType = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`;

const StDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  color: #333;
`;

const StBackButton = styled.button`
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
const StAddDeleteButton = styled.button`
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
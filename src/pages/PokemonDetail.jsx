import { useSearchParams } from "react-router-dom";
import MOCK_DATA from "../data/pokemonData";

const PokemonDetail = () => {

  const [searchParams] = useSearchParams();
  const pokemonId = searchParams.get("id"); //쿼리스트링의 객체로 들어온 아이디값


  // searchParams의 pokemonId값과 MOCK_DATA의 id를 비교하여 일치하면
  // 정보 뿌려주기
  // 쿼리파라미터는 무조건 문자열임 / 문자배열 / undefined
  const pokemonData = MOCK_DATA.find((e) => e.id.toString() === pokemonId);


  return (
    <div>
      <img src={pokemonData.img_url} alt="이미지" />
      {pokemonData.korean_name}
      {pokemonData.types}
      {pokemonData.description}
    </div>
  );
};

export default PokemonDetail;

import { useSearchParams } from "react-router-dom";
import MOCK_DATA from "../data/pokemonData";

const PokemonDetail = () => {

  const [searchParams] = useSearchParams();
  const pokemonId = searchParams.get("id"); //쿼리스트링의 객체로 들어온 아이디값
  console.log("queryid =>", pokemonId);

  // searchParams의 pokemonId값과 MOCK_DATA의 id를 비교하여 일치하면
  // 정보 뿌려주기
  const pokemonData = MOCK_DATA.find((e) => e.id === pokemonId);
  console.log("matchid =>",pokemonData);

  return (
    <div>
      {pokemonData.img_url}
      {pokemonData.korean_name}
      {pokemonData.types}
      {pokemonData.description}
    </div>
  );
};

export default PokemonDetail;

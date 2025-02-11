import styled from "styled-components";

// 공통 컨테이너 스타일
export const StContainer = styled.div`
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

// 버튼 스타일
export const StButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
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

// 포켓몬 이미지 스타일
export const StPokemonImage = styled.img`
  width: 80px;
  height: 80px;
`;

// 포켓몬 이름 스타일
export const StPokemonName = styled.p`
  font-weight: bold;
  margin: 5px 0;
`;

// 포켓몬 ID 스타일
export const StPokemonID = styled.p`
  font-size: 14px;
  color: #666;
`;

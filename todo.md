- 과제 로드맵 기준 to-do : 대쉬보드, 포켓몬 리스트와 선택 기능 구현
- Git 링크 공유 : https://github.com/Hyojin-Moon/poketmon.git
- 현재 구현 정도(100%가 전체 기능 완료 기준) : 대쉬보드에 포켓몬 추가/삭제 기능
- 목표(다음 체크 타임까지):  디테일 페이지 생성 및 이동
✅ 1. 디테일 페이지 컴포넌트 생성
- PokemonDetail.jsx 생성 및 UI 구현
- UI는 이미지, 이름, 아이디(넘버), type, discription 해당 데이터의 정보 전부 표시
- 뒤로 가기 버튼, 추가/삭제버튼(추가된경우 삭제, 삭제된경우 추가)
✅ 2. 클릭시 페이지 이동
- 버튼 외의 이미지 클릭시 useNavigate을 사용하여 페이지 이동
- 공통 Router.jsx 에서 처리
✅ 3. 데이터 받기
- queryString으로 ID값 받아오기
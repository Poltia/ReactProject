# ReactProject

# 리액트 기반으로 여행사 페이지 만들기

### 페이지 구성
  * 메인 페이지
  * 회원가입, 로그인 페이지
  * 예약 내역 확인 페이지
  * 내 정보 수정 페이지
  * 후기 작성할 게시판 페이지

### 기능 구성
  * 회원 정보 DB 구축
  * 예약 상황 실시간 반영
#
### 사용한 라이브러리
* FRONT
  * <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=black">
  * <img src="https://img.shields.io/badge/react_router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=black">
  * <img src="https://img.shields.io/badge/react_redux-764ABC?style=for-the-badge&logo=redux&logoColor=black">
  * <img src="https://img.shields.io/badge/redux_devtool_sextension-764ABC?style=for-the-badge&logo=redux&logoColor=black">
  * <img src="https://img.shields.io/badge/thunk-339933?style=for-the-badge&logo=node.js&logoColor=black">
  * <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=black">
  * <img src="https://img.shields.io/badge/swiper-6332F6?style=for-the-badge&logo=swiper&logoColor=black">
  * <img src="https://img.shields.io/badge/react_cookie-339933?style=for-the-badge&logo=node.js&logoColor=black">
* BACK
  * <img src="https://img.shields.io/badge/mysql2-4479A1?style=for-the-badge&logo=mysql&logoColor=black">
  * <img src="https://img.shields.io/badge/sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=black">
  * <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=black">
  * <img src="https://img.shields.io/badge/express_session-000000?style=for-the-badge&logo=express&logoColor=black">
  * <img src="https://img.shields.io/badge/cors-339933?style=for-the-badge&logo=node.js&logoColor=black">
  * <img src="https://img.shields.io/badge/bcrypt-339933?style=for-the-badge&logo=node.js&logoColor=black">
  * <img src="https://img.shields.io/badge/json_Web_Token-000000?style=for-the-badge&logo=jsonWebToken&logoColor=black">
  * <img src="https://img.shields.io/badge/dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black">
#
### 이슈 및 해결
  ##### 회원가입 및 로그인 오류시에도 페이지가 넘어감
    * 회원가입 페이지는 중복확인 버튼을 추가해서 아이디 중복확인을 하고 넘어가도록 변경
    * 로그인 페이지는 조건문으로 로그인 성공/실패 뜨게하고,
      useNavigate를 담은 변수를 login middleware에 매개변수로 같이 넘겨서 성공시에만 페이지가 넘어가도록 설정해서 해결함
  ##### 리액트 로그인 유지
    * App.js에 코드를 작성해서 페이지 렌더링시마다 토큰을 체크,
      access 토큰이 정상이면 재발급해서 로그인 유지, access 토큰이 비정상이면 refresh 토큰을 확인해서 정상이면 access 토큰 재발급,
      refresh 토큰이 비정상이면 재로그인 유도해서 재로그인하도록 설정함.
  ##### 항공 좌석 예약시 map() 함수로 만든 div태그를 선택하면 값을 가져오는데 문제가 생김
    * 태그에 data-key=value 로 설정해서 dataset.key 로 불러오게 설정
  ##### 예약된 좌석 표시해주는데 문제가 생김
    * 기본 좌석 배열을 배열[]에서 객체{}로 바꿔서 객체 값으로 조절함



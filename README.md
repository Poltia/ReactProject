# ReactProject

# 리액트 기반으로 여행사 페이지 만들기

### 페이지 구성

- 메인 페이지
- 회원가입, 로그인 페이지
- 예약 내역 확인 페이지
- 내 정보 수정 페이지
- 후기 작성할 게시판 페이지

### 기능 구성

- 예약 상황 실시간 반영
- 회원 정보 DB 구축
<br/><img width="50%" src="https://github.com/Poltia/ReactProject/blob/main/readme_imgs/DB_ERD.png" />


#

### 사용한 라이브러리

<br>

<div align="center">FRONT</div><br>
<div align="center">
    <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=black">
    <img src="https://img.shields.io/badge/react_router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=black">
<div align="center">
</div>
    <img src="https://img.shields.io/badge/react_redux-764ABC?style=for-the-badge&logo=redux&logoColor=black">
    <img src="https://img.shields.io/badge/redux_devtool_sextension-764ABC?style=for-the-badge&logo=redux&logoColor=black">
<div align="center">
</div>
    <img src="https://img.shields.io/badge/thunk-339933?style=for-the-badge&logo=node.js&logoColor=black">
    <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=black">
<div align="center">
</div>
    <img src="https://img.shields.io/badge/swiper-6332F6?style=for-the-badge&logo=swiper&logoColor=black">
    <img src="https://img.shields.io/badge/react_cookie-339933?style=for-the-badge&logo=node.js&logoColor=black">
</div>

<br>
<br>

<div align="center">BACK</div><br>
<div align="center">
    <img src="https://img.shields.io/badge/mysql2-4479A1?style=for-the-badge&logo=mysql&logoColor=black">
    <img src="https://img.shields.io/badge/sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=black">
</div>
<div align="center">
    <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
    <img src="https://img.shields.io/badge/express_session-000000?style=for-the-badge&logo=express&logoColor=white">
</div>
<div align="center">
    <img src="https://img.shields.io/badge/cors-339933?style=for-the-badge&logo=node.js&logoColor=black">
    <img src="https://img.shields.io/badge/bcrypt-339933?style=for-the-badge&logo=node.js&logoColor=black">
</div>
<div align="center">
    <img src="https://img.shields.io/badge/json_Web_Tokens-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white">
    <img src="https://img.shields.io/badge/dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black">
</div>

#

### 페이지 소개

<br/>

- 메인 페이지

<img src="https://github.com/Poltia/ReactProject/blob/main/readme_imgs/main.png">

Swiper Library를 사용해 슬라이드 구현.<br/>
이미지에 클릭이벤트를 넣어 예약 페이지로 이동하도록 구현.

<br/>

- 패키지 예약 페이지

<img src="https://github.com/Poltia/ReactProject/blob/main/readme_imgs/package_jeju.png">

<img src="https://github.com/Poltia/ReactProject/blob/main/readme_imgs/package_yang.png">

Header navigate에서 "패키지"에 마우스 호버 이벤트를 추가해 제주 혹은 양양 패키지 페이지로 이동 할 수 있는 탭을 띄움.<br/>
예약확인 버튼 클릭시 현재 예약 인수를 출력하고, 예약 가능.

<br/>

- 항공 예약 페이지

<img src="https://github.com/Poltia/ReactProject/blob/main/readme_imgs/air.png">

목적지와 날짜를 선택하면 예약 현황 "확인하기" 버튼을 클릭해 현재 예약현황 확인 가능.<br/>
좌석을 클릭해 선택된 좌석 예약 가능.

<br/>

- 호텔 예약 패키지

<img src="https://github.com/Poltia/ReactProject/blob/main/readme_imgs/hotel.png">

지역, 숙박 일수 선택후 예약 현황 확인하고 예약 가능.

<br/>

- 후기(리뷰) 페이지

<img src="https://github.com/Poltia/ReactProject/blob/main/readme_imgs/review.png">

<img src="https://github.com/Poltia/ReactProject/blob/main/readme_imgs/post.png">

<img src="https://github.com/Poltia/ReactProject/blob/main/readme_imgs/write.png">

Database에 저장된 게시글 목록을 불러와서 제목과 작성자를 보여줌.<br/>
게시글 제목을 클릭하면 해당 게시글 페이지로 이동, 확인 가능.<br/>
"글쓰기" 버튼으로 작성 페이지로 넘어가 게시글 작성 가능하고, 게시글은 작성자와 함께 Database에 저장.

<br/>

- MY 페이지

<img src="https://github.com/Poltia/ReactProject/blob/main/readme_imgs/mypage.png">

<img src="https://github.com/Poltia/ReactProject/blob/main/readme_imgs/mypage_.png">

로그인 시 상단에 로그인 버튼을 회원 아이디로 바꾸고, 클릭 MY페이지로 이동.<br/>
내 예약 정보 확인 및 취소 가능.<br/>
회원 정보 란에 비밀번호를 한번 더 입력하면 회원 정보 수정 가능.

<br/>

- 회원가입 페이지

<img src="https://github.com/Poltia/ReactProject/blob/main/readme_imgs/signup.png">

아이디, 비밀번호, 전화번호, E-mail을 정규표현식 검사 후 Database에 저장.<br/>
아이디 중복확인 기능 구현.<br/>
비밀번호 confirm 구현.<br/>
E-mail 도메인을 직접입력하지않고 선택하게 구현.

#

### 이슈 및 해결

<br/>

#### 이슈 1 : 회원가입 및 로그인 오류시에도 페이지가 넘어감

    ! 해결
    회원가입 페이지는 중복확인 버튼을 추가해서 아이디 중복확인을 하고 넘어가도록 변경
    로그인 페이지는 조건문으로 로그인 성공/실패 출력하고,
    useNavigate를 담은 변수를 login middleware에 매개변수로 같이 넘겨서
    성공시에만 페이지가 넘어가도록 설정해서 해결

#### 이슈 2 : 리액트 로그인 유지

    ! 해결
    App.js에 코드를 작성해서 페이지 렌더링시마다 토큰을 체크,
    access 토큰이 정상이면 재발급해서 로그인 유지,
    access 토큰이 비정상이면 refresh 토큰을 확인해서 정상이면 access 토큰 재발급,
    refresh 토큰이 비정상이면 재로그인 유도하도록 설정함.

#### 이슈 3 : 항공 좌석 예약시 map() 함수로 만든 div태그를 선택했을 때 값을 가져오는데 문제가 생김

    ! 해결
    태그에 data-key=value 로 설정해서 dataset.key 로 불러오게 설정

#### 이슈 4 : 예약된 좌석 표시해주는데 문제가 생김

    ! 해결
    기본 좌석 배열을 배열[]에서 객체{}로 바꿔서 객체 값으로 조절함

# 코인 라이프 프로젝트



## 프로젝트 소개
- 가상화폐 사용자를 위한 코인 개시판 입니다.
- 가상화폐에 관심 있는 사용자들은 누구나 가입할 수 있습니다.
- 실시간 시세 확인, 자유개시판, 질문개시판이 있습니다.
- 가상화패를 이용,투자 하며 얻은 경험을 공유하고 댓글을 통해 소통할 수 있습니다.

## 개발 기간
- 2024년 01월 08일 ~ 2024년 01월 12일
    - 아이디어 선정
    - 개발 환경 구축
    - 개발 시작
    - 중간 점검
    - 테스트
    - 발표

- 2024년 01월 13일 ~ ...
- 프로젝트가 끝나고 개인 프로젝트로 전환
    - 버그 수정, 기능 업데이트 중

## 팀원
- 하민우 : 풀스텍 
- 박준규 : 백엔드
- 강다은 : 프론트엔드
- 강동협 : 프론트엔드
- 안제혁 : 프론트엔드

# 개발 환경

## 개발 도구
- OS : Ubuntu, MacOS, Windows10
- Runtime : nodeJS
- IDE : VScode
- Framework : Express.JS
- Library : React
- Server: AWS EC2, OracleCloud
- DataBase : EC2- > Docker -> MySQL

### 프론트엔드
- HTML
- CSS
- JS
- React

### 백엔드
- Node.js
- Express
- MySQL
- Nginx


# 설계 및 기능 구현

## DB 설계도
- DB 설계도 입니다.

![image](https://github.com/OppSpark/2024_Coin_project/assets/137988657/08961674-b34d-433a-aa36-a94a0a9e5054)





### SQL Injection 차단

- 선처리 방식을 이용해 SQL 인젝션을 차단했습니다.

<img width="818" alt="스크린샷 2024-01-24 15 45 16" src="https://github.com/OppSpark/2024_Coin_project/assets/137988657/f86580e5-1034-4ef3-b691-16346986901d">


<img width="285" alt="스크린샷 2024-01-24 15 44 01" src="https://github.com/OppSpark/2024_Coin_project/assets/137988657/62a94150-091e-4b9a-87be-8f9f826827e7">



### 회원가입 기능

- 회원가입 시 예외처리를 했습니다.

- PW 를 DB에 저장 시 평문으로 저장합니다.
- 추 후 수정 예정입니다.

<img width="787" alt="스크린샷 2024-01-24 16 11 18" src="https://github.com/OppSpark/2024_Coin_project/assets/137988657/f2b375fc-0a91-4df9-bd29-32fa19b71272">




### 로그인 기능
- 로그인 기능 코드입니다.
- 예외처리

<img width="486" alt="스크린샷 2024-02-02 04 49 15" src="https://github.com/OppSpark/2024_Coin_project/assets/137988657/8535239a-f191-4753-b430-e73782583a71">



## 페이지 소개

### 메인 페이지
- three.js 를 이용해 3D를 표현했습니다.
<img width="1792" alt="스크린샷 2024-01-22 13 59 47" src="https://github.com/OppSpark/2024_Coin_project/assets/137988657/e2e08380-f9d4-4348-a42c-b0a3b4ea3e42">




### 코인차트
- 코인차트입니다.
- UP-bit  오픈 API 를 이용해 실시간으로 코인 시세를 받아옵니다.
- 10분, 30분,1시간 봉, 여러 코인 시세를 실시간으로 볼 수 있습니다.
<img width="1792" alt="스크린샷 2024-01-22 14 00 03" src="https://github.com/OppSpark/2024_Coin_project/assets/137988657/e79a4e6e-2228-4b55-a5b0-bc203501451c">


### 자유게시판
- 자유게시판 입니다.
- Map를 이용해 게시글을 표시합니다.

<img width="1792" alt="스크린샷 2024-01-22 14 36 49" src="https://github.com/OppSpark/2024_Coin_project/assets/137988657/939ea3f5-4f84-4bd2-9c57-e60a04837a9b">



### 자유게시판 글 확인
- 자유게시판 글 내용입니다.
- 제목 , 내용, 작성자, 조회수, 댓글을 표시힙니다.

<img width="1792" alt="스크린샷 2024-01-22 14 37 19" src="https://github.com/OppSpark/2024_Coin_project/assets/137988657/7271529d-04c0-43d7-ad50-ceb291997356">

<img width="1792" alt="스크린샷 2024-01-22 14 38 04" src="https://github.com/OppSpark/2024_Coin_project/assets/137988657/51bfe2c3-0a85-4426-854c-736c808ea18d">


### 자유게시판 수정, 삭제
- 수정기능과 삭제 기능입니다.
- 글 작성자만 수정 삭제가 가능합니다.
- 
<img width="1792" alt="스크린샷 2024-01-22 14 37 23" src="https://github.com/OppSpark/2024_Coin_project/assets/137988657/4e24746c-9454-4ecc-920e-327bab86e582">
<img width="1792" alt="스크린샷 2024-01-22 14 39 06" src="https://github.com/OppSpark/2024_Coin_project/assets/137988657/4f1d7398-970c-40b0-a221-7f81000c5480">


### 질문게시판
- 질문게시판도 자유게시판과 거의 동일하나
- 질문당 하나의 답변만 작성항 수 있습니다.
- 답변이 등록되면 답변창이 없어집니다.
<img width="1792" alt="스크린샷 2024-01-22 14 37 36" src="https://github.com/OppSpark/2024_Coin_project/assets/137988657/bf504b81-9c37-4d4d-8b3a-85b33e41d953">





### 회원가입 및 로그인 기능

- 회원가입과 로그인 기능입니다.
- 

<img width="1588" alt="스크린샷 2024-01-22 15 26 49" src="https://github.com/OppSpark/2024_Coin_project/assets/137988657/40c5c67f-98ec-4ce8-91e9-db9632168fee">


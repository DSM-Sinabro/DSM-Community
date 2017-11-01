# 대뮤니티

## 1. 주제 : 교내 커뮤니티 개발

대뮤니티 (DSM 교내 커뮤니티)

### 현재의 문제점
- 현재 교내 네트워크가 없어 선후배끼리 이름도 모르는 상황은 물론 동급생끼리도 서로의 이름을 모르는 경우가 많다.
- 또한 학생들이 궁금한 것이 있지만 선배들과 친하지 않아 물어보지 못하고 혼자서 며칠동안 삽질하는 경우도 있다.

### 목적
- 위와 같은 학생들이 서로 자유롭게 질문하고 답하면서 서로 윈윈 할 수 있는 공간도 만들어준다.
- 자신과 관심 분야가 같은 학생들끼리 스터디를 할 수 있는 서비스를 제시한다.
- 졸업생은 재학생과 교류하며 자신의 경험, 현업의 이야기, 요즘 기술 트렌드, 멘토링 등도 가능하도록 한다.

## 2. 동아리가 보유하고 있는 능력

분야 | 기술
---|---
IoT | 아두이노, 라즈베리파이
머신러닝 | Tensor Flow
프론트엔드(Frontend) | Javascript, HTML5, CSS(SASS), ReactJS, VueJS, Webpack, etc.
백엔드(Backend) | nginx, NodeJS, Express, MongoDB, MySQL, AWS, Azure, etc.
안드로이드(Android) | Java, Kotlin, Realm, SQLite, OKHttp, Retrofit, Material Design, etc.

## 3. 프로젝트의 기반 기술

### Frontend 
- 기존 2,3학년 학생들이 사용하던 React는 1학년 학생들이 이해하고 사용하기 힘들다고 판단
- HTML파일을 템플릿 기반으로 사용하고 NPM과 CDN을 동시에 지원해주는 VueJS를 사용할 예정

### Backend
- NodeJS와 Express를 이용
- MongoDB를 사용, mongoose 라이브러리를 사용해 데이터베이스를 제어
- 완성된 프로젝트는 AWS EC2 인스턴스 위에 올려 도메인 연결
- 가능하다면 다른 제품(RDS 등)들과 연동하여 사용

### Android
- Java를 기반으로 개발
- sharedpreferences 이용한 쿠키, 세션 관리  
- MVP , MVVM 등 하나의 개발 패턴을 사용하여 개발진행
- FireBase를 활용한 알림 및 메세지 기능 개발 
- Retrofit2를 사용한 통신  

### Design
- Adobe Experience Design 사용


## 4. 프로젝트 추진 계획
- 애자일 방법론 사용, 변형한 스크럼을 적용시켜 진행
- 연장학습 시간에 데일리 미팅
- User Story, Feature List 작성 후 Planning Poker를 통해 개발 기간 산정
- 팀별 매일 아침 or 저녁에 모여서 데일리 미팅 진행
- 팀별 코드리뷰 진행 (방식은 상의후 선정)
- 매주 2회 팀장들끼리 진행상황 및 이슈 공유

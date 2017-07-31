# DSM-Community Server

## 개발 기간
2017.07. ~ 2017.08.  

## Technical Stacks
1. Node.js
2. Express
3. MySQL / MongoDB (결정해야함)

## 개발자 / 개발 역할



## 디렉토리 구조

- server
    - **app.js** : 메인 app.js파일, 이 파일을 실행시켜 서버를 실행
    - routes : 라우팅 모듈 디렉토리
        - XXX 디렉토리 : XXX에 관한 요청을 라우팅하는 라우터를 가지는 디렉토리, index.js를 export함 / 여러 개가 생김
            - index.js : XXX에 관한 요청을 처리하는 라우터
        - **index.js** : 위의 디렉토리들에서 import한 여러개의 라우터를 묶어 export해주는 js파일
    - database : 데이터베이스 모듈 디렉토리
        - 안에 들어갈 내용은 MySQL을 사용하느냐 / MongoDB를 사용하느냐에 따라 달라짐
    - **package.json** : 노드 패키지 관리자 파일, .gitignore에 node_modules가 등록되어있어 git에는 따로 올라가지 않기 때문에 서버 실행 전 ```npm install``` 해주어야 함
    - ~~**config.js**~~ : 서버 설정 파일, .gitignore에 등록해 두어 git에는 올라가지 않음
    - ~~**node_modules**~~ : npm을 통해 install받은 패키지들이 들어간 디렉토리, .gitignore에 등록해 두어 git에는 올라가지 않음


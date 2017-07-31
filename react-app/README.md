# DSM-Community React-App

## 개발 기간
2017.07. ~ 2017.08.  

## Technical Stacks
1. HTML
2. CSS
3. Javascript
4. React.js

## 개발자 / 개발 역할



## 디렉토리 구조

- react-app
    - **app.js** : 메인 app.js파일, 이 파일을 실행시켜 서버를 실행
    - public
        - **index.html** 
    - src : 소스코드 디렉토리
        - components : 컴포넌트들(부품들)을 담는 디렉토리 ex) Header.js
        - containers : 컴포넌트들을 불러와 조립한 결과물을 담는 디렉토리 ex) Landing.js에서 Header.js를 불러오고 있음 -> Header = 랜딩페이지를 구성하는 컴포넌트
        - css : CSS 파일을 담는 디렉토리
        - images : 사용되는 이미지(로고 등)를 담는 디렉토리
        - **index.js** : React-App index.js파일, 주석으로 가이드라인 달아놓음
    - build : react 빌드 결과 디렉토리 (```npm run build```를 통해 react-app을 빌드하면 이 디렉토리 안에 내용이 추가됨) / 이 안의 내용은 건들 필요 없음
        - **asset-manifest.json**
        - **index.html**
        - **service-worker.js**
        - static : 빌드 후 minify된 파일들이 이곳에 저장됨
    - **package.json** : 노드 패키지 관리자 파일, .gitignore에 node_modules가 등록되어있어 git에는 따로 올라가지 않기 때문에 서버 실행 전 ```npm install``` 해주어야 함
    - ~~**node_modules**~~ : npm을 통해 install받은 패키지들이 들어간 디렉토리, .gitignore에 등록해 두어 git에는 올라가지 않음


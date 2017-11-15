<template>
  <div>
    <top-bar />
    <div id="mypage-modifiedinformation">
      <span id="mypage">마이페이지</span>
      <div id="modifiedinformation">
        <div id="modifiedinformation-bar">
          <span id="text-bar">회원정보수정</span>
        </div>
        <div id="password">
          <span id="text-password">비밀번호</span>
          <input type="password">
          <p><button type="button">확인</button></p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>

import TopBar from './TopBar'
import Footer from './Footer'

export default {
  name: 'ModifiedInformation',
  components: {
    TopBar,
    Footer
  }
}
</script>
<style scoped>
#mypage-modifiedinformation{
  position: relative;
  margin: 150px 1px 1px 625px;
}

#modifiedinformation {
  width: 55%;
  height: 26vh;
  margin-top: 1%;
}

#modifiedinformation-bar {
  border-bottom: 2px solid orange;
  height: 8vh;
  background:linear-gradient(to bottom,#F48E16, #FFB35A);
  color: white;
  font-size: 30px;
  text-align: center;
  line-height: 6vh;
}

#password {
  height: 20vh;
  text-align: center;
  border: 2px solid #D8D8D8;
  border-width: 1px 2px 2px 2px;
}

#text-bar {
  line-height: 8vh;
  font-size: 1.4rem;
  padding-left: 2%;
}

#text-password {
  font-size: 1.2rem; 
  line-height: 13vh;
}

#mypage{
  font-size: 2rem;
  margin-left: 1.5%
}

input {
  border: 1px solid #000000;
  line-height: 2.3vh;
}

button {
  height: 30px;
  width: 50px;
  border: 1px solid #5D5D5D;
  font-size: 1rem;
  color: #5D5D5D;
  background-color: #ffffff;  
}

</style>

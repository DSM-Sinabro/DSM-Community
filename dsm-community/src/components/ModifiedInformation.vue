<template>
  <div id="background">
    <top-bar />
    <div id="mypage-modifiedinformation">
      <span id="mypage">마이페이지</span>
      <div id="modifiedinformation">
        <div id="modifiedinformation-bar">
          <span id="text-bar">회원정보수정</span>
        </div>
        <check-password />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>

import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import CheckPassword from './ModifiedInformationBody/CheckPassword'

export default {
  name: 'ModifiedInformation',
  components: {
    TopBar,
    Footer,
    CheckPassword
  }
}
</script>

<style scoped>
#background {
    background-image: url("../assets/background.png");
    height: 80vh;
}

#mypage-modifiedinformation {
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
  font-size: 1.5rem;
  text-align: center;
  line-height: 6vh;
}

#text-bar {
  line-height: 8vh;
  font-size: 1.4rem;
  padding-left: 2%;
}

#mypage{
  font-size: 2rem;
  margin-left: 1.5%
}

</style>

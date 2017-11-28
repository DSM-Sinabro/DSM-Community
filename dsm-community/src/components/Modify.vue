<template>
  <div id="background">
    <top-bar />
    <div id="mypage-modifiedinformation">
      <span id="mypage">마이페이지</span>
      <div id="modifiedinformation">
        <div id="modifiedinformation-bar">
          <span id="text-bar">회원정보수정</span>
        </div>
        <check-password v-show="checked == 1" @checked="checked=2"/>
        <modify-information v-show="checked == 2" @checked="(name, email, facebook, github) => {checked=3; this.name = name; this.email = email; this.facebook = facebook; this.github = github;}" :name="name" :email="email" :facebook="facebook" :github="github"/>
        <modify-information-data v-show="checked == 3" @checked="checked=2" :name="name" :email="email" :facebook="facebook" :github="github"/>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>

import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import CheckPassword from './ModifiedInformationBody/CheckPassword'
import ModifyInformation from './ModifiedInformationBody/ModifyInformation'
import ModifyInformationData from './ModifiedInformationBody/ModifyInformationData'

export default {
  name: 'Modify',
  components: {
    TopBar,
    Footer,
    CheckPassword,
    ModifyInformation,
    ModifyInformationData
  },
  data: function () {
    return {
      checked: 1,
      name: '',
      email: '',
      facebook: '',
      github: ''
    }
  }
}
</script>

<style scoped>
#background {
    background-image: url("../assets/background.png");
}

#mypage-modifiedinformation {
  position: relative;
  width: 712px;
  margin: auto;
  margin-top: 200px;
}

#modifiedinformation {
  width: 712px;
  height: 360px;
  margin-top: 1%;
}

#modifiedinformation-bar {
  border-bottom: 2px solid orange;
  height: 80px;
  background:linear-gradient(to bottom,#F48E16, #FFB35A);
  color: white;
  font-size: 1.5rem;
  text-align: center;
}

#text-bar {
  line-height: 80px;
  font-size: 1.4rem;
  padding-left: 2%;
}

#mypage{
  font-size: 2rem;
  margin-left: 1.5%;
  cursor: pointer;
}

</style>

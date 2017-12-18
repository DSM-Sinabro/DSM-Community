<template>
  <div id = "top-bar">
    <logo />
    <status v-on:login="showLogin = true;" :isLogin="isLogin" />
    <my-info :isLogin="isLogin"/>
    <select-menu />
    <login-modal v-if="showLogin" @close="showLogin = false;" @toggleSignUp="showLogin = false; showSignUp = true;"/>
    <sign-up-modal v-if="showSignUp" @close="showSignUp = false;"/>
  </div>
</template>


<script>
import SelectMenu from './TopBar/SelectMenu'
import MyInfo from './TopBar/MyInfo'
import Status from './TopBar/Status'
import Logo from './TopBar/Logo'
import LoginModal from './LoginModal'
import SignUpModal from './SignUpModal'

export default {
  name: 'TopBar',
  components: {
    SelectMenu,
    MyInfo,
    Status,
    Logo,
    LoginModal,
    SignUpModal
  },
  data: function () {
    return {
      isLogin: false,
      showLogin: false,
      showSignUp: false
    }
  }
}
</script>

<style scoped>
#top-bar {
  width: 100%;
  height: 70px;
  display: inline-block;
  /* vertical-align: middle; */
  padding: 0;
  border-bottom: 2px solid #d8d8d8;
  background-color: #ffffff;
}
</style>



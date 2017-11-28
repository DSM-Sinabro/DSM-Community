<template>
  <div width="100%" id="main">
    <top-bar v-on:toggleLogin="onToggleLogin"/>
    <back-img />
    <main-body />
    <footer-vue />
    <login-modal v-show="showLogin" v-on:toggleLogin="onToggleLogin"/>
    <sign-up-modal v-show="showSignUp"/>
  </div>
</template>

<script>
import TopBar from '../components/TopBar'
import BackImg from '../components/BackImg'
import MainBody from '../components/MainBody'
import FooterVue from '../components/Footer'
import LoginModal from '../components/LoginModal'
import SignUpModal from '../components/SignUpModal'

export default {
  name: 'Main',
  components: {
    TopBar,
    BackImg,
    MainBody,
    FooterVue,
    LoginModal,
    SignUpModal
  },
  data: function () {
    return {
      showLogin: false,
      showSignUp: false
    }
  },
  methods: {
    onToggleLogin: function () {
      this.showLogin = !this.showLogin
      console.log('onToggleLogin')
    }
  }
}
</script>

<style scoped>
  #main{
    position: relative;
    min-height: 100%;
  }
</style>


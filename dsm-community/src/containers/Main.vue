<template>
  <div width="100%" id="main">
    <top-bar v-on:showLogin="onShowLogin"/>
    <back-img />
    <main-body />
    <Footer />
    <login-modal v-show="showLogin" v-on:showLogin="onShowLogin"/>
    <sign-up-modal v-show="showSignUp"/>
  </div>
</template>

<script>
import TopBar from '../components/TopBar'
import BackImg from '../components/BackImg'
import MainBody from '../components/MainBody'
import Footer from '../components/Footer'
import LoginModal from '../components/LoginModal'

export default {
  name: 'Main',
  components: {
    TopBar,
    BackImg,
    MainBody,
    Footer,
    LoginModal
  },
  data: function () {
    return {
      showLogin: false,
      showSignUp: false
    }
  },
  methods: {
    onShowLogin: function () {
      this.showLogin = !this.showLogin
      console.log('run')
    }
  }
}
</script>

<style scoped>
  #main{
    position: relative;
  }
</style>


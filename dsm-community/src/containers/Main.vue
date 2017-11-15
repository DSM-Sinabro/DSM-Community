<template>
  <div>
    <top-bar />
    <back-img />
    <main-body />
    <Footer />
    <login-modal v-on:showLogin="showLogin = !showLogin" v-show="showLogin"/>
    <sign-up-modal v-show="showSignUp"/>
  </div>
</template>

<script>
import TopBar from '../components/TopBar'
import BackImg from '../components/BackImg'
import MainBody from '../components/MainBody'
import Footer from '../components/Footer'

export default {
  name: 'Main',
  components: {
    TopBar,
    BackImg,
    MainBody,
    Footer
  },
  data: function() {
    return {
      showLogin: false,
      showSignUp: false
    }
  }
}
</script>

<style scoped>
</style>


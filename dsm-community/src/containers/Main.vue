<template>
  <div width="100%">
    <top-bar />
    <back-img />
    <main-body />
    <Footer />
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
  }
}
</script>

<style scoped>

</style>


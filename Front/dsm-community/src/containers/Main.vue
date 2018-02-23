<template>
  <div width="100%" id="main">
    <top-bar/>
    <back-img />
    <main-body />
  </div>
</template>

<script>
import TopBar from '../components/TopBar'
import BackImg from '../components/BackImg'
import MainBody from '../components/MainBody'

export default {
  name: 'Main',
  components: {
    TopBar,
    BackImg,
    MainBody
  }
}
</script>

<style scoped>
  #main{
    position: relative;
    min-height: 100%;
  }
</style>
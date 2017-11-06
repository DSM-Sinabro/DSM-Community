<template>
  <div>
    <top-bar />
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

</style>


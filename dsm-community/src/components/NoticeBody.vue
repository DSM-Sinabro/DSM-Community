<template>
  <div>
    <top-bar />
    <h1 id="title">공지사항</h1>
    <board-main />
    <board-search />
    <Footer />
  </div>
</template>

<script>

import TopBar from './TopBar'
import BoardSearch from './BoardBody/BoardSearch'
import BoardMain from './BoardBody/BoardMain'
import Footer from './Footer'

export default {
  name: 'Main',
  components: {
    TopBar,
    BoardMain,
    BoardSearch,
    Footer
  }
}
</script>

<style scoped>
h1{
  margin: 60px 5px 5px 550px;
}
</style>
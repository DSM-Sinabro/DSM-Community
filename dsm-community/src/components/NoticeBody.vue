<template>
  <div>
    <top-bar />
    <div>
    <h1 id="title">공지사항</h1>
    <button id="writing">글쓰기</button>
    </div>
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
  margin-top: 70px;
  margin-left: 28%;
  float: left;
}
#writing{
  width: 40px;
}
</style>
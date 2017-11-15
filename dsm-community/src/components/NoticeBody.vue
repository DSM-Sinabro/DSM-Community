<template>
  <div>
    <top-bar />
    <h1 id="title">공지사항</h1>
    <main-notice />
    <search-notice />
    <Footer />
  </div>
</template>

<script>

import TopBar from './TopBar'
import SearchNotice from './NoticeBody/SearchNotice'
import MainNotice from './NoticeBody/MainNotice'
import Footer from './Footer'

export default {
  name: 'Main',
  components: {
    TopBar,
    MainNotice,
    SearchNotice,
    Footer
  }
}
</script>

<style scoped>
h1{
  margin: 60px 5px 5px 550px;
}
</style>
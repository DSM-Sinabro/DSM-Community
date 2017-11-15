<template>
  <div>
    <top-bar />
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

</style>
<template>
  <div>
    <top-bar />
    <main-notice />
    <search-notice />
  </div>
</template>

<script>

import TopBar from './TopBar'
import SearchNotice from './NoticeBody/SearchNotice'
import MainNotice from './NoticeBody/MainNotice'

export default {
  name: 'Main',
  components: {
    TopBar,
    MainNotice,
    SearchNotice
  }
}
</script>

<style scoped>

</style>
<template>
  <div>
  <notice-body />
  <search-notice />
  <main-notice />
  </div>
</template>

<script>
import TopBar from '../components/TopBar'
import NoticeBody from '../components/NoticeBody'
import MainNotice from '../components/MainNotice'
import SearchNoice from '../components/SearchNotice'

export default {
  name: 'Main',
  components: {
    TopBar,
    NoticeBody,
    SearchNoice,
    MainNotice
  }
}
</script>

<style scoped>

</style>


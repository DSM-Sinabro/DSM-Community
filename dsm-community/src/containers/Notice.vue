<template>
  <div id="background">
    <notice-body />
    <search-notice />
    <main-notice v-for="notice in notices" :notice="notice" :key="notice.id" />
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
  },
  data: function () {
    return {
      notices: [
        {title: 'hello', image: '1234', name: '김건', date: '2017/11/08'},
        {title: 'hi', image: '13123', name: '류수영', date: '2018/12/31'},
        {title: 'Complied', image: '123', name: '박해빈', date: '2010/12/12'},
        {title: 'Come', image: '1232', name: '오경태', date: '2010/12/12'},
        {title: 'Complied', image: '123', name: '박지은', date: '2010/12/12'}
      ]
    }
  }
}
</script>

<style scoped>
  #background {
    background-image: url("../assets/notice_background.jpg")
  }
</style>


<template>
  <div id="background">
    <notice-body />
    <board-main v-for="notice in notices" :notice="notice" :key="notice.id" />
<<<<<<< HEAD
    <post-modal v-show="showPost" v-on:togglePost="onTogglePost" / >
=======
    <Footer />
>>>>>>> a7e5fa47ad91a58fa5af09fa52be16e078f6a0a9
  </div>
</template>


<script>
import TopBar from '../components/TopBar'
import NoticeBody from '../components/NoticeBody'
import BoardMain from '../components/BoardBody/BoardMain'
import BoardSearch from '../components/BoardBody/BoardSearch'
<<<<<<< HEAD
import PostModal from '../components/PostModal'
=======
import Footer from '../components/Footer'
>>>>>>> a7e5fa47ad91a58fa5af09fa52be16e078f6a0a9

export default {
  name: 'Main',
  components: {
    TopBar,
    NoticeBody,
    BoardSearch,
    BoardMain,
<<<<<<< HEAD
    PostModal
=======
    Footer
>>>>>>> a7e5fa47ad91a58fa5af09fa52be16e078f6a0a9
  },
  data: function () {
    return {
      notices: [
        {title: 'HELLO', image: '1234', name: '박해빈', date: '2017/11/08', views: '123', reply: '123', tag: '#HELLO', tag2: '#', tag3: '#'},
        {title: '체육대회', image: '1234', name: '장필준', date: '2017/11/08', views: '123', reply: '123', tag: '#배구', tag2: '#줄다리기', tag3: '#예선'},
        {title: 'DSM 공모전', image: '13123', name: '한능희', date: '2018/12/31', views: '123', reply: '123', tag: '#힘내라', tag2: '#영상제출', tag3: '#11.15'},
        {title: '자치회 회의 초대', image: '123', name: '박해빈', date: '2010/12/12', views: '123', reply: '123', tag: '#윤정현', tag2: '#박해빈', tag3: '#자치회'},
        {title: '학교 규정', image: '1232', name: '서현철', date: '2010/12/12', views: '123', reply: '122', tag: '#동복', tag2: '#사복안됨', tag3: '#춥다'}
      ],
      showPost: false
    }
  },
  methods: {
    onTogglePost: function () {
      this.showPost = !this.showPost
      console.log('onTogglePost')
    }
  }
}
</script>

<style scoped>
  #background {
    background-image: url("../assets/background.png");
    background-size: cover;
  }
</style>


<template>
  <div id="background">
    <post-body :title="title" @togglePost="onTogglePost"/>
    <post-modal v-show="showPost" v-on:togglePost="onTogglePost" />
  </div>
</template>


<script>
import PostBody from '../components/PostBody'
import PostModal from '../components/PostModal'

export default {
  name: 'Notice',
  components: {
    PostBody,
    PostModal
  },
  data: function () {
    return {
      showPost: false,
      title: ''
    }
  },
  methods: {
    onTogglePost: function () {
      this.showPost = !this.showPost
      console.log('onTogglePost')
    },
    setTitle: function () {
      if (this.$route.params.category === 'notice') {
        this.title = '공지사항'
      } else if (this.$route.params.category === 'freeboard') {
        this.title = '자유게시판'
      } else if (this.$route.params.category === 'study') {
        this.title = '스터디'
      } else if (this.$route.params.category === 'project') {
        this.title = '프로젝트'
      } else if (this.$route.params.category === 'club') {
        this.title = '동아리'
      } else if (this.$route.params.category === 'contest') {
        this.title = '대회정보'
      } else {
        this.title = '없음'
      }
    }
  },
  mounted: function () {
    this.setTitle()
  },
  watch: {
    '$route': 'setTitle'
  }
}
</script>

<style scoped>
  #background {
    background-image: url("../assets/background.png");
    background-size: cover;
    height: 100%;
  }
</style>

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
      } else {
        this.title = '메롱'
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

``
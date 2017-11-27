<template>
  <div id="background">
    <post-body v-on:togglePost="onTogglePost"/>
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
    height: 100%;
  }
</style>


<template>
<<<<<<< HEAD
  <post-modal v-show="showPost"/>
=======
  <div>
    <post-modal />
  </div>
>>>>>>> a7e5fa47ad91a58fa5af09fa52be16e078f6a0a9
</template>

<script>
import PostModal from '../components/PostModal'

export default {
  name: 'PostModal',
  components: {
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

</style>

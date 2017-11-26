<template>
  <post-modal />
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

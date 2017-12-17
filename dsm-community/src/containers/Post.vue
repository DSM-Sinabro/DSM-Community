<template>
  <post-modal />
</template>

<script>
import WritingForm from '../components/WritingForm'

export default {
  name: 'Post',
  components: {
    WritingForm
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

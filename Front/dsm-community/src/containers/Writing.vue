<template>
  <writing-form />
</template>

<script>
import WritingForm from '../components/WritingForm'

export default {
  name: 'Writing',
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

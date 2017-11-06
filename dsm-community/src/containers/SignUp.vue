<template>
  <div id=signup>
      <h1>SignUp</h1>
      <sign-up-modal />
  </div>
</template>

<script>
import SignUpModal from '@/components/SignUp/SignUpModal'

export default {
  name: 'SignUp',
  components: {
    SignUpModal
  }
}
</script>

<style scoped>

</style>

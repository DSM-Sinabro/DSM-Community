<template>
<div>
  <post-body /> 
  <post-comment />
</div>
</template>

<script>
import PostBody from './PostDetailBody/PostBody'
import PostComment from './PostDetailBody/PostComment'
export default {
  name: 'PostDetailBody',
  components: {
    PostBody,
    PostComment
  }
}
</script>
<style scoped>

</style>

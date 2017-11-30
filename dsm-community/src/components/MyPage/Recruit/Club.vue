<template>
  <div class = "box">
      <my-template category = "동아리"/>

  </div>
</template>
<script>
import MyTemplate from './MyTemplate'
export default {
  name: 'Club',
  components: {
    MyTemplate
  }
}
</script>
<style scoped>
    .box{
        width: 50%;
        height: 50%;
        /* border: 1px solid black; */
        float: left;
        border-right: 1px solid #cecece;
    }
</style>

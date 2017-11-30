<template>
  <div class = "box">
      <my-template category="프로젝트"/>
  </div>
</template>
<script>
import MyTemplate from './MyTemplate'
export default {
  name: 'Project',
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
        vertical-align: middle;
        border-bottom: 1px solid #cecece;
        border-right: 1px solid #cecece;
    }

</style>

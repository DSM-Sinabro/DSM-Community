<template>
  <div class = "box">
      <my-template v-bind:Work="Hellooo"/>
  </div>
</template>
<script>
import MyTemplate from './MyTemplate'
export default {
  name: 'Project',
  data: function () {
    return {work: 'Project'}
  },
  components: {
    MyTemplate
  }
}
</script>
<style scoped>
    .box{
        width: 50%;
        height: 50%; 
        border: 1px solid black;
        float: left;
        vertical-align: middle;
    }

</style>

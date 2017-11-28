<template>
  <div class ="box">
  <my-template />   
  </div>
</template>
<script>
import MyTemplate from './MyTemplate'
export default {
  name: 'Study',
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
     border-bottom: 1px solid #cecece;
     float: left;
 }
</style>

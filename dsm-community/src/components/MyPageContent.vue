<template>
  <div>
    <div id = "Content">
      <info />
      <recruit />
    </div>
  </div>
</template>

<script>
import Info from './MyPage/Info'
import Recruit from './MyPage/Recruit'
export default {
  name: 'MyPageContent',
  components: {
    Info,
    Recruit
  }
}
</script>

<style scoped>
  #Content{
    margin-top: 60px !important;
    margin: auto;
    width: 600px;
    height: 600px;
    border: 1px solid black;
  }
</style>

<template>
  <div>
    <top-bar />
    <my-page-content />
  </div>
</template>

<script>
import TopBar from '../components/TopBar'
import MyPageContent from '../components/MyPageContent'
export default {
  name: 'MyPage',
  components: {
    TopBar,
    MyPageContent
  }
}
</script>

<style scoped>

</style>


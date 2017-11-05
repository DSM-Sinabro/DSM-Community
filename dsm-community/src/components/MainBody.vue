<template>
  <div>
    <meal />
    <notice-board />
  </div>
</template>

<script>
import Meal from './MainBody/Meal'
import NoticeBoard from './MainBody/NoticeBoard'

export default {
  name: 'MainBody',
  components: {
    Meal,
    NoticeBoard
  }
}
</script>

<style scoped>

</style>


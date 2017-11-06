<template>
  <div>
  <calendar />
    <meal />
    <notice-board />
  </div>
</template>

<script>
import Meal from './MainBody/Meal'
import NoticeBoard from './MainBody/NoticeBoard'
import Calendar from './MainBody/Calendar'

export default {
  name: 'MainBody',
  components: {
    Calendar,
    Meal,
    NoticeBoard
  }
}
</script>

<style scoped>

</style>


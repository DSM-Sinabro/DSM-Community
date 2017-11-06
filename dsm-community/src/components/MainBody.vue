<template>
  <div>
  <notice-board />
  <calendar />
  </div>
</template>

<script>
import NoticeBoard from './MainBody/NoticeBoard'
import Calendar from './MainBody/Calendar'

export default {
  name: 'MainBody',
  components: {
    NoticeBoard,
    Calendar
  }
}
</script>

<style scoped>

</style>


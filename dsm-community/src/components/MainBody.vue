<template>
  <div>
    <meal />
    <notice-board />
    <calendar />
    <advertise />
  </div>
</template>

<script>
import Meal from './MainBody/Meal'
import NoticeBoard from './MainBody/NoticeBoard'
import Calendar from './MainBody/Calendar'
import Advertise from './MainBody/Advertise'

export default {
  name: 'MainBody',
  components: {
    Calendar,
    Meal,
    NoticeBoard,
    Advertise
  }
}
</script>

<style scoped>

</style>


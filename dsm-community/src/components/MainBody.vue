<template>
  <div>
    <meal />
    <hotpost />
    <notice-board />
    <calendar />
  </div>
</template>

<script>
import Meal from './MainBody/Meal'
import NoticeBoard from './MainBody/NoticeBoard'
import HotPost from './MainBody/HotPost'
import Calendar from './MainBody/Calendar'

export default {
  name: 'MainBody',
  components: {
    Calendar,
    Meal,
    NoticeBoard,
    HotPost
  }
}
</script>

<style scoped>

</style>


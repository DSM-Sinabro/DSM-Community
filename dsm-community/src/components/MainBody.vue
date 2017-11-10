<template>
  <div>
    <meal />
    <div id="board">
      <hot-post />
      <notice-board />
    </div>
    <calendar />
    <advertise />
  </div>
</template>

<script>
import Meal from './MainBody/Meal'
import NoticeBoard from './MainBody/NoticeBoard'
import HotPost from './MainBody/HotPost'
import Calendar from './MainBody/Calendar'
import Advertise from './MainBody/Advertise'

export default {
  name: 'MainBody',
  components: {
    Calendar,
    Meal,
    NoticeBoard,
    Advertise,
    HotPost
  }
}
</script>

<style scoped>
#board {
  display: inline-block;
  margin-left: 2%; 
  width: 40%;
  height: 470px;
}
</style>


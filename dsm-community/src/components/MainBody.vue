<template>
  <div>
    <meal />
    <div id="board">
      <hot-post />
      <notice-board />
    </div>
    <div class ="right">
    <calendar />
    <advertise />
    </div>
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
  margin-left: 20px;
  /* width: 40%; */
  /* height: 470px; */
  /* float: left; */
}

.right{
  float: right;
  width : 100px;
  height: 500px;
  display: inline-block;
}
</style>


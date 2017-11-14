<template>
  <div id="main-body">
    <div>  
      <meal class="mb-child"/>
      <div class="mb-child">
        <hot-post />
        <notice-board />
      </div>
      <div class="mb-child">
        <calendar />
        <advertise />
      </div>
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

.mb-child {
  display: inline-block;
  vertical-align: top;
}

.mb-child:nth-of-type(1) {
  width: 11vw;
}

.mb-child:nth-of-type(2) {
  width: 47vw;
  margin: 0 2.5vw 0 2.5vw;
}

.md-child:nth-of-type(3) {
  width: 20vw;
}

#main-body {
  text-align: center;
}

#main-body > div {
  display: inline-block;
  text-align: left;
}
</style>


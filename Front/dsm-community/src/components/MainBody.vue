<template>
  <div id="main-body">
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
@import url(https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css);

  *  {
    font-family: 'NanumSquare', sans-serif; 
  }
.mb-child {
  display: inline-block;
  vertical-align: top;
}

.mb-child:nth-of-type(1) {
  width: 18%;
}

.mb-child:nth-of-type(2) {
  width: 45%;
  margin: 0 3% 0 3%;
}

.md-child:nth-of-type(3) {
  width: 25%;
}

#main-body {
  width: 85%;
  margin: auto;
  display: flex;
  justify-content: center;

}
</style>


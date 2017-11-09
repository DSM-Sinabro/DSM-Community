<template>
  <div>
    <meal />
    <hot-post />
    <notice-board />
    <div>
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

</style>


<template>
  <div>
  <vue-event-calendar :events="demoEvents"></vue-event-calendar>
  <!-- <vueEventCalendar :events="demoEvents" /> -->
  </div>
</template>

<script>
// Vue.use(vueEventCalendar, {locale: 'en'})
// import vueEventCalendar from 'vue-event-calendar'
export default {
  data () {
    return {
      demoEvents: [{
        date: '2016/11/12',
        title: 'foo'
      }, {
        date: '2017/11/12',
        title: 'test',
        desc: 'description!'
      }]
    }
  },
  name: 'Calendar'
}
</script>

<style scoped>

</style>


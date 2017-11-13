<template>
  <div class = "calendar">
    <div class = "text">{{ month }}월 학사 일정</div>
    <div class = "underline"></div>
  <vue-event-calendar :events="demoEvents"></vue-event-calendar>
  <!-- <vueEventCalendar :events="demoEvents" /> -->
  </div>
</template>
<script>
export default {
  data () {
    var date = new Date()
    var month = date.getMonth() + 1
    return {
      month,
      demoEvents: [{
        date: '2017/11/14',
        title: 'test',
        desc: 'helloWorld'
      }, {
        date: '2017/11/19',
        title: 'test',
        desc: 'helloWorld'
      }]
    }
  },
  name: 'Calendar'
}
</script>

<style scoped>
.calendar{
  background-color: white;
  border: 2px solid#E7E8EA;
  padding-top: 3px;
  box-shadow: 2px 2px 2px #E7E8EA;
}

.underline{
  background-color: #EEBB71;
  width: 65%;
  height : 4px;
}

.text{
  color : #EEBB71;
  padding: 14px 20px 14px 20px;
  font-weight: bold;
}
</style>
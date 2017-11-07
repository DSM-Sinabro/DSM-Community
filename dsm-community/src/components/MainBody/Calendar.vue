<template>
  <div class = "calendar">
    <div class = "text">10월 학사 일정</div>
    <div class = "underline"></div>
  <vue-event-calendar :events="demoEvents"></vue-event-calendar>
  <!-- <vueEventCalendar :events="demoEvents" /> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      demoEvents: [{
        date: '2017/11/14',
        title: 'test',
        desc: 'description!'
      }, {
        date: '2017/11/19',
        title: 'test',
        desc: 'hello'
      }]
    }
  },
  name: 'Calendar'
}
</script>

<style scoped>
.calendar{
  /* float: right; */
  margin-left: 80px;
  display: inline-block;
  border: 2px solid#E7E8EA;
  padding-top: 3px;
  box-shadow: 2px 2px 2px #E7E8EA;
}

.underline{
  background-color: #EEBB71;
  width: 230px;
  height : 4px;
}

.text{
  color : #EEBB71;
  padding: 14px 20px 14px 20px;
  font-weight: bold;
}
</style>


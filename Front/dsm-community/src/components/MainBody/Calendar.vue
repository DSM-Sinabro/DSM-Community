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
@import url('./style.css');

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

.__vev_calendar-wrapper{width:366px !important;margin:0 auto}.__vev_calendar-wrapper .cal-wrapper{padding: 10px;position:relative; display: inline-block;}.__vev_calendar-wrapper .cal-wrapper .date-num{line-height:40px}.__vev_calendar-wrapper .events-wrapper{display: none !important ;}@media screen and (){.__vev_calendar-wrapper .cal-wrapper{padding:10px 5px}.__vev_calendar-wrapper .cal-wrapper .date-num{line-height:42px;}.__vev_calendar-wrapper .events-wrapper{margin-top:11px;padding:10px}}.__vev_calendar-wrapper{position:relative;overflow:hidden;}.__vev_calendar-wrapper *{box-sizing:border-box}.__vev_calendar-wrapper ::-webkit-scrollbar{width:8px;height:8px}.__vev_calendar-wrapper ::-webkit-scrollbar-track{box-shadow:inset 0 0 2px rgba(0,0,0,.2);border-radius:5px}.__vev_calendar-wrapper ::-webkit-scrollbar-thumb{border-radius:5px;background:rgba(0,0,0,.2)}.__vev_calendar-wrapper .cal-wrapper .cal-header{display:none !important;position:relative;;background-color:#fff;font-weight:500;overflow:hidden;padding-bottom:10px}.__vev_calendar-wrapper .cal-wrapper .cal-header>div{float:left;line-height:20px;padding:15px}.__vev_calendar-wrapper .cal-wrapper .cal-header .title{text-align:center}.__vev_calendar-wrapper .cal-wrapper .cal-header .l{text-align:left;cursor:pointer;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.__vev_calendar-wrapper .cal-wrapper .cal-header .r{text-align:right;cursor:pointer;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.__vev_calendar-wrapper .cal-wrapper .cal-body{width:350px;}.__vev_calendar-wrapper .cal-wrapper .cal-body .weeks{color: #A7ABAC;font-weight : bold;width:350px;overflow:hidden;text-align:center;font-size:1rem}.__vev_calendar-wrapper .cal-wrapper .cal-body .weeks .item{line-height:50px;float:left; width:50px}.__vev_calendar-wrapper .cal-wrapper .cal-body .dates{width:350px;overflow:hidden;text-align:center;font-size:10px }.__vev_calendar-wrapper .cal-wrapper .cal-body .dates .item{position:relative;float:left;display:block;width:50px;cursor:default;-webkit-tap-highlight-color:rgba(0,0,0,0)}.__vev_calendar-wrapper .cal-wrapper .cal-body .dates .item .date-num{font-size:1rem;position:relative;z-index:1 !important;}.__vev_calendar-wrapper .cal-wrapper .cal-body .dates .item.event{cursor:pointer}.__vev_calendar-wrapper .cal-wrapper .cal-body .dates .item.selected-day .is-event{background-color:#f29543}.__vev_calendar-wrapper .cal-wrapper .cal-body .dates .item .is-event{content:"";border:1px solid #f29543;background-color:#fff;border-radius:50%;width:36px;height:36px;position:absolute;z-index:1;margin-left:-18px;margin-top:-19px}.__vev_calendar-wrapper .cal-wrapper .cal-body .dates .item .is-today{content:"";background-color:#f29543;border-radius:50%;opacity:.8;width:12px;height:4px;position:absolute;z-index:2;margin-left:-6px;margin-top:8px}.__vev_calendar-wrapper .events-wrapper{border-radius:10px}.__vev_calendar-wrapper .events-wrapper .cal-events{overflow-y:auto;padding:0 5px;margin:15px 0}.__vev_calendar-wrapper .events-wrapper .date{text-align:center;color:#fff;background-color:rgba(0,0,0,.2);border-radius:20px;margin:0 auto;font-size:22px}.__vev_calendar-wrapper .events-wrapper .event-item{padding:5px 20px;margin-top:15px;box-shadow:0 3px 11px 2px rgba(0,0,0,.1);background-color:#fff;border-radius:5px;color:#323232;position:relative}.__vev_calendar-wrapper .events-wrapper .event-item:first-child{margin-top:0}.__vev_calendar-wrapper .events-wrapper .event-item .title{height:40px;line-height:40px;color:#323232;font-size:16px;border-bottom:1px solid #f2f2f2}.__vev_calendar-wrapper .events-wrapper .event-item .time{position:absolute;right:30px;top:17px;color:#9b9b9b;font-size:14px}.__vev_calendar-wrapper .events-wrapper .event-item .desc{color:#9b9b9b;font-size:14px;padding:7px 0}.__vev_calendar-wrapper .arrow-left.icon{color:#000;position:absolute;margin-top:10px}.__vev_calendar-wrapper .arrow-left.icon:before{content:"";position:absolute;left:1px;top:-5px;width:10px;height:10px;border-top:1px solid currentColor;border-right:1px solid currentColor;-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}.__vev_calendar-wrapper .arrow-right.icon{color:#000;position:absolute;right:6%;margin-top:10px}.__vev_calendar-wrapper .arrow-right.icon:before{content:"";position:absolute;right:1px;top:-5px;width:10px;height:10px;border-top:1px solid currentColor;border-right:1px solid currentColor;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.__vev_calendar-wrapper h3,.__vev_calendar-wrapper p{margin:0;padding:0}
/*# sourceMappingURL=style.css.map*/ 
.__vev_calendar-wrapper .cal-wrapper .cal-body .weeks :nth-child(1){
    color: red !important;
}
.__vev_calendar-wrapper .cal-wrapper .cal-body .weeks :nth-child(7){
    color : blue !important;
}


</style>
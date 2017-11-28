<template>
  <div id="mealboard">
    <div id="breakfast">
      <div class="title">
        아침
      </div>
      dafdsafsd
    </div>
    <div id = "lunch">
      <div class = "title">
        점심
      </div>
      asfdf
    </div>
    <div id = "dinner">
      <div class = "title">
        저녁
      </div>
      asfsaf
    </div>
  </div>
</template>

<script>
export default {
  name: 'Meal',
  methods: {
    loadMeal: function (date) {
      this.$http.get('/meal/daily', {
        params: {
          month: date.getMonth() + 1,
          date: date.getDate()
        }
      }).then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
    }
  },
  data: function () {
    return {
      date: new Date()
    }
  },
  created: function () {
    this.loadMeal(this.date)
  }
}
</script>

<style scoped>
#mealboard {
  padding: 0;
  border: 1px solid #D5D5D5;  
  margin-bottom: 0;
  height: 530px;
  /* display: inline-block; */
  vertical-align: top;
  float: left;
}

#mealboard > div {
  margin: 0;
  text-align: center;
  height: calc(100%/3);
}

.title {
  height: 50px;
  background: linear-gradient(to bottom, #ffb300, #fecf9e);
  line-height: 50px;
  font-size: 1.3rem;
  font-weight: bold;
  color: #95989A;
}
</style>

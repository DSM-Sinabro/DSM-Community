<template>
  <div class = "meal-box">
    <div class = "meal">
      <div class = "meal-time"><span>아침</span></div>
      <div class = "line"></div>
      <div class = "meal-menu" v-for="meal in meals" :key="meal.id">
        <p>{{ meal.breakfast }}</p>
        
      </div>
    </div>
    <div class = "meal">
     
      <div class = "meal-time"><span>점심</span></div>
      <div class = "line"></div>
      <div class = "meal-menu" v-for="meal in meals" :key="meal.id">
        <p>{{ meal.lunch }}</p>
      </div>
    </div>
    <div class = "meal">
   
      <div class = "meal-time"><span>저녁</span></div>
      <div class = "line"></div>
      <div class = "meal-menu" v-for="meal in meals" :key="meal.id">
        <p>{{ meal.dinner }}</p>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Meal',
  methods: {
    loadMeal: function (date) {
      this.$http.get(`/meal`, {
        params: {
          month: date.getMonth() + 1,
          date: date.getDate()
        },
        headers: {
          'Access-Control-Allow-Origin': `http://13.124.15.202:8080`
        }
      }).then(function (response) {
        console.log(response.data)
        console.log('response successfully')
      }).catch(function (error) {
        if (error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          console.log(error.request)
        } else {
          console.log(error.config)
        }
      })
    }
  },
  data: function () {
    return {
      date: new Date(),
      meals: [
        {breakfast: 'breakfast'},
        {lunch: 'lunch'},
        {dinner: 'dinner'}
      ]
    }
  },
  created: function () {
    this.loadMeal(this.date)
  }
}
</script>

<style scoped>
  .meal-box {
    /* width: 100px; */
    /* border: 2px solid #e5e5e5; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .meal {
    width: 250px;
    height: 148px;
    border: 1px solid #e5e5e5;
    margin-bottom: 20px;
    position: relative;
    border-radius: 20px;
    box-shadow: 1.5px 1.5px #e5e5e5;
  }

  .meal-bread-img {
    width: 250px;
    height: 100%;
    position: absolute;
    z-index: 1;
  }

  .meal-time {
    /* z-index: 1; */
    top: 0;
    width: 250px;
    height: 30px;
    /* border: 1px solid black; */
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    background: orange;
    z-index: 4;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
  }

  .meal-menu {
    width: 250px;
    height: 120px;
    /* border: 1px solid black; */
    position: absolute;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 12px;
  }
  
  .line {
    width: 250px;
    height: 2px;
    background-color: orange;
  }
</style>

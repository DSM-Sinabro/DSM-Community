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
    width: 80%;
    height: 148px;
    border: 1px solid #e5e5e5;
    margin-bottom: 20px;
    position: relative;
    border-radius: 20px;
    box-shadow: 1.5px 1.5px #e5e5e5;
  }

  .meal-bread-img {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
  }

  .meal-time {
    z-index: 2;
    top: 0;
    width: 100%;
    height: 35px;
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
    width: 100%;
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
    width: 100%;
    height: 2px;
    background-color: orange;
  }
</style>

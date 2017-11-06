<<template>
  <div id = "mealboard">
      <div id = "breakfast">
        <div class ="bar">
        </div>
      </div>
      <div id = "lunch">
        <div class = "bar">
          </div>
        </div>
      <div id = "dinner">
        <div class = "bar">
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Meal'
}
</script>

<style scoped>
  #mealboard{
    /*box-shadow: 5px 5px 5px #E7E7E7;*/
    border: 1px solid #D5D5D5;  
    margin-bottom: 0;
    height: 527px;
    width: 11.5%;
    display: inline-block;
    margin-left: 3.5%;
    margin-top: 1%;
    box-shadow: 3px 3px 15px #E9E9E9;
}
</style>

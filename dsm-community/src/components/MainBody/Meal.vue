<<template>
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
  name: 'Meal'
}
</script>

<style scoped>
#mealboard {
  padding: 0;
  border: 1px solid #D5D5D5;  
  margin-bottom: 0;
  height: 530px;
  width: 11%;
  display: inline-block;
  margin-left: 6%;
  vertical-align: top;
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

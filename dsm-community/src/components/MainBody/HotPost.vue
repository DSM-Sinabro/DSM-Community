<template>
  <div>
    <span id="hot-post">최근 핫한 소식</span>
    <span id="post">박해빈 죽었다-건이로부터</span>
  </div>
</template>

<script>
export default {
  name: 'HotPost'
}
</script>

<style scoped>
div {
  box-shadow: 4px 2px 8px #D7D7D7;
  border: 1px solid #D7D7D7;
  margin-bottom: 40px;
  height: 45px;
  width: 100%;
}

#hot-post {
  background-color: #FDAE4F;
  height: 43.4px;
  color: #ffffff;
  font-weight: bold;
  line-height: 43.4px; /*.뭐라고 되있는거 고치기*/
  width: 25%;
  display: inline-block;
  text-align: center;
}

#post { 
  color: #767676;
  font-weight: bold;
  width: 75%;
  height: 43.4px;
  line-height: 43.4px;
  cursor: pointer;
  font-size: 13px;
  margin-left: 10px;
}
</style>


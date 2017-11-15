<template>
  <div id = "logout">
      <a class = "mylogout" v-on:click="$emit('showModal')">로그아웃</a>
  </div>
</template>

<script>
export default {
  name: 'Logout'
}
</script>

<style scoped>
#logout{
    float: right;
    margin-right: 40px;
    padding-top: 21px;
}
.mylogout{
    cursor: pointer;
    font-size: 14px;
    /* display: inline-block; */
    vertical-align: middle;
}
</style>

<template>
  <div id = "logout">
      <a class = "mylogout">로그아웃</a>
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
    margin : 0px 20px 0 40px;
}
.mylogout{
    cursor: pointer;
    font-size: 14px;
    display: inline-block;
    vertical-align: sub;
}
</style>

<template>
  <div id = "info">
    <router-link to = "/MyPage">
    <div class = "image"></div>
    <div class = "name">{{ name ? name : 'guest' }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MyInfo',
  props: [
    'isLogin'
  ],
  data: function () {
    return {
      name: ''
    }
  }
}
</script>

<style scoped>
#info {
  float: right;
  margin-right: 60px;
}

.name {
  margin-left: 15px;
  font-size: 14px;
  display: inline-block;
  vertical-align: middle;
  padding-top: 24px;
  cursor: pointer;
}

.image {
  width: 25px;
  height: 26px;
  border-radius: 50%;
  background-color: gray;
  float: left;
  padding-top: 3px;
  margin-left: 2px;
  margin-top: 20px;
}
</style>

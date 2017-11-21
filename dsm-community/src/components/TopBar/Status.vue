<template>
  <div id="status">
    <span class="my-status" v-if="isLogin" v-on:click="logout">로그아웃</span>
    <span class="my-status" v-else v-on:click="login">로그인</span>
  </div>
</template>

<script>
export default {
  name: 'Status',
  data: function () {
    return {
    }
  },
  props: [
    'isLogin'
  ],
  methods: {
    login: function () {
      this.$emit('login')
      console.log('login')
    },
    logout: function () {
    }
  }
}
</script>

<style scoped>
#status {
  float: right;
  margin-right: 40px;
  padding-top: 21px;
}
.my-status {
  cursor: pointer;
  font-size: 14px;
  /* display: inline-block; */
  vertical-align: middle;
}
</style>

<template>
  <div id = "top-bar">
    <logo />
    <status v-on:login="onLogin" :isLogin="isLogin"/>
    <my-info :isLogin="isLogin"/>
    <select-menu />
  </div>
</template>


<script>
import SelectMenu from './TopBar/SelectMenu'
import MyInfo from './TopBar/MyInfo'
import Status from './TopBar/Status'
import Logo from './TopBar/Logo'

export default {
  name: 'TopBar',
  components: {
    SelectMenu,
    MyInfo,
    Status,
    Logo
  },
  data: function () {
    return {
      isLogin: false
    }
  },
  methods: {
    onLogin: function () {
      this.$emit('toggleLogin')
      console.log('onLogin')
    }
  }
}
</script>

<style scoped>
#top-bar {
  width: 100%;
  height: 70px;
  display: inline-block;
  /* vertical-align: middle; */
  padding: 0;
  border-bottom: 2px solid #d8d8d8;
  background-color: #ffffff;
}
</style>



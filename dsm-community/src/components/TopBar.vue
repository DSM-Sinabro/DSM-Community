<template>
  <div id = "top-bar">
      <logo />
      <!-- 로고 컴포넌트 -->
      <logout v-on:showModal="showModal"/>
      <my-info />
      <select-menu />
  </div>
</template>


<script>
import SelectMenu from './TopBar/SelectMenu'
import MyInfo from './TopBar/MyInfo'
import Logout from './TopBar/Logout'
import Logo from './TopBar/Logo'

export default {
  name: 'TopBar',
  components: {
    SelectMenu,
    MyInfo,
    Logout,
    Logo
  },
  methods: {
    showModal: function (event) {
      this.$emit('showLogin')
      console.log('showModal')
    }
  }
}
</script>

<style scoped>

#top-bar{
  width : 100%;
  height : 70px;
  display: inline-block;
  /* vertical-align: middle; */
  padding: 0;
  border-bottom: 2px solid #D8D8D8 ;
  background-color: #ffffff; 
}

</style>



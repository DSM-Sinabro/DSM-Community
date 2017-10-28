<template>
  <div id = "top-bar">
      <logo />
      <!-- 로고 컴포넌트 -->
      <logout />
      <my-info />
      <select-menu />
  </div>
</template>


<script>
import SelectMenu from './Main/SelectMenu'
import MyInfo from './Main/MyInfo'
import Logout from './Main/Logout'
import Logo from './Main/Logo'

export default {
  name: 'TopBar',
  components: {
    SelectMenu,
    MyInfo,
    Logout,
    Logo
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
}

</style>



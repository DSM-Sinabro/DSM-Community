<template>
  <div id = "top-bar">
      <!-- 로고 컴포넌트 -->
      <!-- 메뉴 컴포넌트  -->
      <logout />
      <my-info />
      <select-menu />
      <!-- 사용자 컴포넌트  -->
      <!-- 로그아웃 컴포넌트  -->
  </div>
</template>


<script>
import SelectMenu from './Main/SelectMenu'
import MyInfo from './Main/MyInfo'
import Logout from './Main/Logout'

export default {
  name: 'TopBar',
  components: {
    SelectMenu,
    MyInfo,
    Logout
  }
}
</script>

<style scoped>

#top-bar{
    width : 1500px;
    height : 70px;
    border: 1px solid black;
    display: table-cell;
    vertical-align: middle;
    padding: 0;
}

</style>



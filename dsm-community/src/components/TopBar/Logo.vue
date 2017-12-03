<template>
  <div id = "logoArea">
    <router-link to = "/">
    <img src="../../assets/logo.png" alt="" router-link to = "/">
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style scoped>
  img{
      width: 200px;
      display: block;
      float: left;
      cursor: pointer;
  }
  #logoArea{
      width: 300px;
      display: inline-block;
  }
</style>

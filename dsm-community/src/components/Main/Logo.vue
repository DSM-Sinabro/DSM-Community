<template>
  <div id = "logoArea">
      <a class = "logo"><img src="../image/logo.png" alt=""></a>
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
        display: inline;
        position: fixed;
    }

    #logoArea{
        width: 300px;
        display: inline-block;
        position: relative;
    }

    .logo{
        
    }
</style>

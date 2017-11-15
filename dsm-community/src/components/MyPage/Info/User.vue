<template>
  <div class = "User">
  <div class = "modify">
      <div class = "image"></div>
      <div class = "name">홍길동</div>
  </div>
  </div>
</template>
<script>
export default {
  name: 'User'
}
</script>
<style scoped>

    .User{
        width: 25%;
        height: 100%;
        border: 1px solid black;
        float: left;
    }
    .modify{
      margin-left: 20px;
    }

   .image{
        margin-top: 35px !important;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 1px solid black;
        margin: auto;
        }

    .name{
        text-align: center;
        padding-top: 10px;
    }

</style>

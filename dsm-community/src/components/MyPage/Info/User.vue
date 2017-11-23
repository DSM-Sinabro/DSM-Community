<template>
  <div class = "User">
      <div class = "pf">
          <div class = "box">
        <div class = "image"></div>
        <div class = "name">홍길동</div>
     </div>
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
        display: inline-block;
        float: left;
        line-height: 20px;
        background-color:#F4a74e;
    }
    .pf{
        display: block;
        width: 100px;
        height: 100%;
        margin: auto;
        vertical-align: middle;
        text-align: center;
        margin-left: 50px;
    }
    .image{
        display: inline-block;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: gray;
    }
    .name{
        display: inline-block;
        
    }
    .box{
        display: inline-block;
        vertical-align:middle;
        margin-top: 50px;
    }

</style>

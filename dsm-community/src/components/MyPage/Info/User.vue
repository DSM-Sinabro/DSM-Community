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
        display: table;
        float: left;
        line-height: 20px;
        background-color:#F4a74e;
    }
    .pf{
        display: table-cell;
        vertical-align: middle;
        width: 200px;
        margin: auto;
        text-align: center;
        padding-left: 100px;
    }
    .image{
        display: inline-block;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: gray;
    }
    .name{
        
    }
    .box{
        display: inline-block;
        vertical-align: middle;
        
    }

</style>

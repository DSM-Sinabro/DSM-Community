<template>
  <div id = "info">
    <div class = "image"></div>
    <div class = "name">홍길동</div>
  </div>
</template>

<script>
export default {
  name: 'MyInfo'
}
</script>

<style scoped>

    #info{
        float: right;
        margin-right: 60px;
    }

    .name{
        margin-left: 15px;
        font-size: 14px;
        display: inline-block;
        vertical-align: middle;
    }

    .image{
        width : 23px;
        height: 23px;
        border-radius: 50%;
        background-color: gray;
        float: left;
        margin-left: 2px;
    display: inline-block;
    }
    
</style>

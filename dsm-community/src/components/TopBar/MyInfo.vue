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
        padding-top: 24px;
    }

    .image{
        width : 25px;
        height: 26px;
        border-radius: 50%;
        background-color: gray;
        float: left;
        padding-top: 3px;
        margin-left: 2px;
        display: inline-block;
        margin-top: 20px;
    }
    
</style>

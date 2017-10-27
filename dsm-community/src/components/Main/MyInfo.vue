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
        display: table;
    }
    
    .name{
        margin-left: 15px;
        display: inline-block;
        vertical-align: text-bottom;
        font-size: 14px;
    }

    .image{
        width : 23px;
        height: 23px;
        border-radius: 50%;
        background-color: gray;
        float: left;
        margin-left: 2px;

    }
    
</style>

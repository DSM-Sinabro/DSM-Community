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
        width: 100px;

    }
    
    .name{
        margin-left: 40px;
        vertical-align: text-bottom;
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

<template>
    <div id = "box">
        <h2 id="text_title">이것은 제목이당(This is title)</h2>
        <div id="circle"></div>
        <h5 id="name">김건빵</h5>
    </div>
</template>

<script>
    
</script>

<style>
    #text_title{
        color: gray;
        float: left;
    }
    #box{
        z-index: 2;
        width: 600px;
        height: 130px;
        border: 3px solid orange;
        margin-left: 30%;
        padding-top: 15px;
        padding-left: 20px;
    }
    #circle{
        border-radius: 100%;
        background-color: gray;
        width: 20px;
        height: 20px;
        margin-left: 450px;
    }
    #name{
        color: gray;
        position: absolute;
        top: 198px;
        left: 910px;
    }
</style>
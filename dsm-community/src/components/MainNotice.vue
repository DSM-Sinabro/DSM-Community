<template>
    <div :notice="notice" id = "box">
        <h2 id="text_title">{{ notice.title }}</h2>
        <div id="name_box">
            <div id="circle"></div>
            <h5 id="name">{{ notice.name }}</h5>
        </div>
        <div id="date_box">
            <h4 id="date">{{ notice.date }}</h4>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MainNotice',
  props: ['notice']
}
</script>


<style>
    #text_title{
        color: gray;
        float: left;
    }
    #box{
        z-index: 2;
        width: 45%;
        height: 110px;
        border: 3px solid orange;
        margin-left: 27.5%;
        padding-top: 15px;
        padding-left: 20px;
        margin-bottom: 20px;
        box-shadow: 0 0 10px #666;
    }
    #circle{
        border-radius: 100%;
        background-color: gray;
        width: 20px;
        height: 20px;
        margin-top: -1px;
        margin-right: 6px; 
        float: left;
    }
    #name{
        color: gray;
        font-weight: bold;
    }
    #name_box{
        width: 20%;
        height: 20%;
        margin-left: 85%;
    }

    #date_box{
        width: 40%;
        height: 20%;
        margin-left: 70%;
        clear: both;
    }
    #date{
        color: gray;
    }
</style>
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
        <div>
            <div id="tag"><p>{{ notice.tag }}</p></div>
            <div id="tag"><p>{{ notice.tag2 }}</p></div>
            <div id="tag"><p>{{ notice.tag3 }}</p></div>
        </div>

        <div id="view_box">
            <icon id="eye" name="eye"></icon>
            <p id="text">{{ notice.views }}</p>
            <icon id="reply" name="commenting-o"></icon>
            <p id="text">{{ notice.reply }}</p>
        </div> 
    </div>
</template>

<script>
export default {
  name: 'BoardMain',
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
        cursor:pointer;
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
    #tag{
        width: 70px;
        height: 25px;
        background-color: coral;
        color: white;
        text-align: center;
        float: left;
        margin-right: 10px;
        font-size: 12px;
        padding-top: 5px;
    }
    #view_box{
        width: 200px;
        height: 25px;
        padding-top: 5px;
        float: left;
        margin-left: 90px;
    }
    #eye{
        width: 27px;
        height: 27px;
        float: left;
        margin-left: 50px;
    }
    #reply{
        width: 25px;
        height: 25px;
        float: left;
    }
    #text{
        float: left;
        margin-left: 2px;
        margin-right: 20px; 
        margin-top: 4px;
    }
</style>
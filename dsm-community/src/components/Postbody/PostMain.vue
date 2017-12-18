<template> 
    <div id = "box">
        <h2 id="text_title">{{ notice.title }}</h2>
        <div id="name_box">
            <div id="circle"></div>
            <h5 id="name">{{ notice.name }}</h5>
        </div>
        <div id="date_box">
            <h4 id="date">{{ notice.date }}</h4>
        </div>
        <div>
            <div id="view_box">
               <icon id="eye" name="eye"></icon>
               <p id="text">{{ notice.views }}</p>
               <icon id="reply" name="commenting-o"></icon>
               <p id="text">{{ notice.reply }}</p>
            </div> 
        </div>
        <hash-tag :tags="notice.tags" id="tags"/>
    </div>
</template>

<script>
import HashTag from '../HashTag'
export default {
  name: 'BoardMain',
  props: ['notice'],
  components: {
    HashTag
  }
}
</script>


<style>
#text_title{
    color: gray;
    float: left;
}

#box{
    z-index: 2;
    width: 860px;
    height: 130px;
    border: 3px solid orange;
    margin: auto;
    padding: 20px;
    margin-bottom: 20px;
    cursor: pointer;
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
    margin-left: 75%;
}

#date_box{
    width: 40%;
    height: 20%;
    margin-left: 75%;
    clear: both;
}
#date{
    color: gray;
}

#tags {
    display: inline-block;
}

#view_box{
    margin-left: 69%;
    width: 200px;
    height: 10px;
    display: inline-block;
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
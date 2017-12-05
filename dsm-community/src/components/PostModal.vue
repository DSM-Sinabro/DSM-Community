<template>
<div id="wrap">
    <div id="all">
        <input type="button" value="X" v-on:click="post" id="closing">
        <input type="text" id="ti" placeholder="Title">
        <editor />
        <show-hashtag />
        <hashtag />
        <button id="done">등록</button>
    </div>
</div>
</template>

<script>
import Hashtag from './PostModal/Hashtag'
import ShowHashtag from './PostModal/ShowHashtag'
import Editor from './PostModal/Editor'

export default {
  name: 'PostModal',
  components: {
    Editor,
    Hashtag,
    ShowHashtag
  },
  methods: {
    post: function () {
      this.$emit('togglePost')
      console.log('togglePost')
    }
  }
}
</script>

<style scoped>
#all {
    height: 600px;
    width: 800px;
    position: absolute;
    float: right;
    right: calc(50% - 850px / 2); 
    margin-left: 250px;
    top: calc(50% - 600px / 2); 
    z-index: 100;
    background-color: #fff7db; 
    overflow: auto;
}
#wrap {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
}
#ti {
    height: 50px;
    width: 620px;
    margin-left:20px;
    margin-top: 15px;
    margin-bottom: 10px;
    font-size: 35px; 
    background-color: rgba(0,0,0,0);
    color: #878480;
}

#ti::placeholer {
    color: #AAAAAA;
    text-decoration: none;
}
#closing {
    float: right;
    cursor: pointer;
    background-color: #fff7db;
    font-size: 20px;
    margin-top: 10px;
    margin-right: 12px;
}
#done {
    cursor: pointer;
    margin-left: 695px;
    width: 75px;
    height: 36px;
    background-color: transparent;
    font-size: 15px;
    background-color: #ffe99e;
    color: black;
    border-radius: 5%;
    box-shadow: 5px 5px 5px #888888;
    margin-bottom: 20px;
}
#done:hover {
    cursor: pointer;
    margin-left: 700px;
    width: 75px;
    height: 36px;
    background-color: transparent;
    font-size: 15px;
    background-color: #efa939;
    color: black;
}
</style>

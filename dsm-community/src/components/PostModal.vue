<template>
<div id="wrap">
    <div id="all">
        <input type="button" value="X" v-on:click="post" id="closing">
        <input type="text" id="ti" placeholder="Title">
        <editor />
        <hashtag />
        <show-hashtag />
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

<style>
#all{
    height: 700px;
    width: 800px;
    position: absolute;
    float: right;
    right: calc(50% - 800px / 2);
    top: calc(50% - 620px / 2);
    z-index: 100;
    background-color: #EAEAEA;
    overflow: auto;
}
#wrap{
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
}
#ti{
    height: 50px;
    width: 620px;
    margin-left:20px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 30px; 
    background-color: rgba(0,0,0,0);
}

#ti::placeholer {
    color: #AAAAAA;
    text-decoration: none;
}
#closing{
    float: left;
    margin-left: 785px;
    cursor: pointer;
}
</style>

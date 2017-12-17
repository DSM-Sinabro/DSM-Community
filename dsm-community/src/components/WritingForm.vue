<template>
  <div id="wrap">
    <div id="all">
      <input type="button" value="X" v-on:click="post" id="closing">
        <input type="text" id="ti" placeholder="Title">
        <div id="under"></div>
        <editor />
        <show-hashtag :tags="tags"/>
        <hashtag @addTag="addTag"/>
        <button id="done">등록</button>
    </div>
  </div>
</template>

<script>
import Hashtag from './WritingForm/Hashtag'
import ShowHashtag from './WritingForm/ShowHashtag'
import Editor from './WritingForm/Editor'

export default {
  name: 'WritingForm',
  components: {
    Editor,
    Hashtag,
    ShowHashtag
  },
  data: function () {
    return {
      tags: [
      ]
    }
  },
  methods: {
    post: function () {
      this.$emit('togglePost')
      console.log('togglePost')
    },
    addTag: function (title) {
      if (this.tags.length >= 5) {
      } else {
        this.tags.push({title: title})
      }
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
    background-color: white; 
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
    margin-left:35px;
    margin-top: 15px;
    margin-bottom: 10px;
    font-size: 35px; 
    background-color: rgba(0,0,0,0);
    color: #878480;
    /* text-decoration: underline orange; */
}

#ti::placeholer {
    color: #AAAAAA;
    text-decoration: none;
}

#under {
    width: 93%;
    height: 0.5px;
    background-color: orange;
    border: 1px solid orange;
    margin: 0 auto;
    /* margin-left: 10px; */
}

#closing {
    float: right;
    cursor: pointer;
    background-color: transparent; 
    font-size: 20px;
    margin-top: 8px;
    margin-right: 10px; 
}

#done {
    cursor: pointer;
    margin-left: 695px;
    width: 75px;
    height: 36px;
    background-color: transparent;
    font-size: 15px;
    background-color: #D2D2D2;
    color: black;
    border-radius: 5%;
    box-shadow: 2px 2px 2px #888888;
    margin-bottom: 20px;
}

#done:hover {
    cursor: pointer;
    margin-left: 695px;
    width: 75px;
    height: 36px;
    background-color: transparent;
    font-size: 15px;
    background-color: #D2D2D2;
    color: black;
    box-shadow: 4.5px 4.5px 4.5px #666666;
} 
</style>

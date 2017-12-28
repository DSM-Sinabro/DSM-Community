<template>
  <div id="wrap">
    <div id="all">
      <input type="button" value="X" v-on:click="post" id="closing">
        <input type="text" id="ti" placeholder="제목을 입력해 주세요" v-on:change="getTitle">
        <div id="under"></div>
        <editor @content="contentChange"/>
        <show-hashtag :tags="tags" @delete="deleteTag"/>
        <hashtag @addTag="addTag"/>
        <button id="done" v-on:click = "submit">등록</button>
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
      ],
      content: '',
      title: '',
      url: '/' + this.$route.params.category,
      publishedDate: ''
    }
  },
  methods: {
    post: function () {
      this.$emit('togglePost')
      console.log('togglePost')
    },
    addTag: function (content) {
      if (this.tags.length >= 5) {
      } else {
        this.tags.push(content)
      }
    },
    deleteTag: function (id) {
      console.log(id)
      this.tags.splice(id, 1)
    },
    contentChange: function (content) {
      this.content = content
    },
    getTitle: function (event) {
      this.title = event.target.value
      // console.log(this.title)
    },
    getTimeStamp: function () {
      var d = new Date()
      this.publishedDate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' +
      d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes()
      console.log(this.publishedDate)
    },
    getHashTags: function () {
    },
    submit: function (event) {
      this.$http.post(this.url, JSON.stringify({
        title: this.title,
        contents: this.contents,
        tags: this.tags
      }), {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        console.log('successfully submit')
      }).catch(function (error) {
        console.log(error)
        console.log('fail to submit')
      })
    }
  },
  created: function () {
    let self = this
    window.onkeydown = function (event) {
      console.log(event)
      if (event.keyCode === 27) {
        self.post()
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

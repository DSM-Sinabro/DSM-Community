<template>
 <div>
    <top-bar />
    <div id="title-box">
      <h1 id="title" :title="title" >{{ title }}</h1>
      <post-search />
    </div>
    <router-link class="router" to="/PostDetail/"><post-main v-for="notice in notices" :notice="notice" :key="notice.id"/></router-link>
    <div id="button-wrapper">
      <button id="writing" v-on:click="togglePost">글쓰기</button>
    </div>
  </div>
</template>

<script>
import TopBar from './TopBar'
import PostSearch from './PostBody/PostSearch'
import PostMain from './PostBody/PostMain'

export default {
  name: 'PostBody',
  components: {
    TopBar,
    PostMain,
    PostSearch
  },
  methods: {
    togglePost: function () {
      this.$emit('togglePost')
      console.log('togglePost')
    }
  },
  data: function () {
    return {
      notices: [
        {title: 'HELLO', image: '1234', name: '박해빈', date: '2017/11/08/FRI', views: '123', reply: '123', tags: ['hi', 'hello', 'first']},
        {title: '체육대회', image: '1234', name: '장필준', date: '2017/11/08/FRI', views: '123', reply: '123', tags: ['second', 'tag', 'work']},
        {title: 'DSM 공모전', image: '13123', name: '한능희', date: '2018/12/31/TUE', views: '123', reply: '123', tags: ['it', 'is', 'third']},
        {title: '자치회 회의 초대', image: '123', name: '박해빈', date: '2010/12/12/TUE', views: '123', reply: '123', tags: ['this', 'is', 'fourth']},
        {title: '학교 규정', image: '1232', name: '서현철', date: '2010/12/12/TUE', views: '123', reply: '122', tags: ['it', 'is', 'last']}
      ]
    }
  },
  props: [
    'title'
  ]
}
</script>

<style scoped>
#title-box {
  width: 900px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 30px;
}

#title {
  display: inline-block;
  color: orange;
  font-size: 40px;
}

#writing {
  width: 67px;
  cursor: pointer;
  background-color: darkorange; 
  height: 40px;
  color: white;
  font-weight: bold;
  font-size: 18px;
}

#button-wrapper {
  width: 900px;
  margin: auto;
 }

 #button-wrapper > button {
   float: right;
 }

     .router{
        text-decoration: none;
    }
</style>
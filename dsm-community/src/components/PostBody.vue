<template>
 <div>
    <top-bar />
    <div id="title-box">
      <h1 id="title" :title="title" >{{ title }}</h1>
      <board-search />
    </div>
    <board-main v-for="notice in notices" :notice="notice" :key="notice.id"/>
    <div id="button-wrapper">
      <button id="writing" v-on:click="togglePost">글쓰기</button>
    </div>
  </div>
</template>

<script>
import TopBar from './TopBar'
import BoardSearch from './BoardBody/BoardSearch'
import BoardMain from './BoardBody/BoardMain'

export default {
  name: 'PostBody',
  components: {
    TopBar,
    BoardMain,
    BoardSearch
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
        {title: 'HELLO', image: '1234', name: '박해빈', date: '2017/11/08/FRI', views: '123', reply: '123', tags: [{title: 'hi'}, {title: 'hello'}, {title: 'hihihi'}]},
        {title: '체육대회', image: '1234', name: '장필준', date: '2017/11/08/FRI', views: '123', reply: '123', tags: [{title: 'hi'}, {title: 'hello'}, {title: 'hihihi'}]},
        {title: 'DSM 공모전', image: '13123', name: '한능희', date: '2018/12/31/TUE', views: '123', reply: '123', tags: [{title: 'hi'}, {title: 'hello'}, {title: 'hihihi'}]},
        {title: '자치회 회의 초대', image: '123', name: '박해빈', date: '2010/12/12/TUE', views: '123', reply: '123', tags: [{title: 'hi'}, {title: 'hello'}, {title: 'hihihi'}]},
        {title: '학교 규정', image: '1232', name: '서현철', date: '2010/12/12/TUE', views: '123', reply: '122', tags: [{title: 'hi'}, {title: 'hello'}, {title: 'hihihi'}]}
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
  width: 860px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 20px;
  text-align: right;
}

#title {
  display: inline-block;
  color: orange;
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
  width: 45%;
  margin: auto;
 }

 #button-wrapper > button {
   float: right;
 }
</style>
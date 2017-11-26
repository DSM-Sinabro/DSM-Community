<template>
  <div>
    <top-bar />
    <div>
    <h1 id="title">공지사항</h1>
    <button id="writing" v-on:click="post">글쓰기</button>
    </div>
    <board-main />
    <board-search />
  </div>
</template>

<script>

import TopBar from './TopBar'
import BoardSearch from './BoardBody/BoardSearch'
import BoardMain from './BoardBody/BoardMain'

export default {
  name: 'Main',
  components: {
    TopBar,
    BoardMain,
<<<<<<< HEAD
    BoardSearch,
    Footer
  },
  methods: {
    post: function () {
      this.$emit('post')
      console.log('post')
    }
=======
    BoardSearch
>>>>>>> a7e5fa47ad91a58fa5af09fa52be16e078f6a0a9
  }
}
</script>

<style scoped>
h1 {
  margin-top: 70px;
  margin-left: 28%;
  float: left;
}
<<<<<<< HEAD
#writing{
  width: 40px;
  cursor: pointer;
=======

#writing {
  width: 70px;
  height: 35px;
  background-color: darkorange;
  color: white;
  position: absolute;
  top: 850px;
  left: 1320px;
  border: 2px darkorange solid;
  cursor: pointer;
  font-size: 18px;
  font-weight: bolder;

>>>>>>> a7e5fa47ad91a58fa5af09fa52be16e078f6a0a9
}
</style>
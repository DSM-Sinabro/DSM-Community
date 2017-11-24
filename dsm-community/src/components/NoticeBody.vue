<template>
  <div>
    <top-bar />
    <div>
    <h1 id="title">공지사항</h1>
    <button id="writing">글쓰기</button>
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
    BoardSearch
  }
}
</script>

<style scoped>
h1 {
  margin-top: 70px;
  margin-left: 28%;
  float: left;
}

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

}
</style>
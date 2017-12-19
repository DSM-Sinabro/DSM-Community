<template> 
  <div id = "box">
    <div id="title">
      <span id="text-title">{{ notice.title }}</span>
    </div>
    <div id="view-box">
      <div id="circle"></div>
      <div id="name">{{ notice.name }}</div> 
      <div id="date">{{ notice.date }}</div> 
      <div>
        <span id="text"><icon id="eye" name="eye"></icon>{{ notice.views }}</span>
        <span id="text"><icon id="reply" name="commenting-o"></icon>{{ notice.reply }}</span>
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

<style scoped>
#box {
  border: 3px solid orange;
  width: 860px;
  margin: auto;
  margin-bottom: 10px;
  height: 150px;
}

#title {
  display: inline-block;
  height: 100px;
  width: 200px;
}

#text-title {
  color: gray;
  font-weight: bold;
  font-size: 33px;
}

#view-box {
  display: inline-block;
  color: gray;
  font-weight: bold;
  font-size: 15px;
  float: right;
}

#circle {
  border-radius: 100%;
  background-color: gray;
  width: 20px;
  height: 20px;
  display: inline-block;
}

</style>
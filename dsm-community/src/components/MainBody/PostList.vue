<template>
  <ul v-bind:post="post" id="body">
    <li id="p-title">{{ post.title }}</li>
    <li id="p-name">{{ post.author }}</li>
    <li id="p-date">{{ post.date }}</li>
    <li id="p-view"><icon id="ic-eye" name="eye"></icon> {{ post.view }}</li>
  </ul>
</template>

<script>
export default {
  name: 'Post',
  props: ['post']
}
</script>

<style scoped>
li {
  padding: 15px;
  font-size: 15px;
  border-bottom: 1px solid #D7D7D7;
  height: 55px;
  display: inline-block;
}

#p-title {
  color: #000000;
  width: 40%;
  font-weight: bold;
  cursor: pointer;
  text-align: left;
}

#p-name, #p-date, #p-view {
  color : #5D5D5D;
  width: 20%;
  cursor: pointer;
  text-align: center;
} 

#ic-eye{
  vertical-align: -2px;
  text-align: center;
}

#body{
  list-style-type: none;
  width: 100%;
  display: table;
  table-layout: fixed;
}
</style>

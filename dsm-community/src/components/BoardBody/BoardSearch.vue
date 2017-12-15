<template>
  <div id="search_box">
    <icon name="search" id="search"></icon>
    <input type="text" id="search_input">
  </div>
</template>

<script>
export default {
  name: 'SearchNotice'
}
</script>

<style>    
#search_box {
  width: 270px;
  height: 30px;
  border: 2px solid orange;
  display: inline-block;
  vertical-align: bottom;
}

#search {
  color: orange;
  padding-left: 1.5%;
  width: 18px;
  height: 18px; 
  padding-top: 2%; 
}

#search_input {
  width: 210px;
  font-size: 15px;
}
</style>
<template>
  <div id="search_box">
    <icon name="search" id="search-ic"></icon>
    <input type="input">
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
  float: right;
}

#search {
  color: orange;
  width: 18px;
  height: 18px; 
}

#search_input {
  width: 210px;
  font-size: 15px;
}
</style>
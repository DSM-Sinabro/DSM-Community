<template>
  <div id="search_box">
    <icon name="search" id="search-ic"></icon>
    <input type="input" id="search-input">
  </div>
</template>

<script>
export default {
  name: 'PostNotice'
}
</script>

<style>    
#search_box {
  width: 270px;
  height: 30px;
  border: 2px solid orange;
  /* display: inline-block; */
  float: right;
  margin-top: 20px;
}

#search {
  color: orange;
  width: 18px;
  height: 18px; 
}

#search-ic {
  color: orange;
  width: 18px;
  height: 18px;
  margin-left: 5px;
  vertical-align: bottom;
}

#search-input {
  width: 230px;
  height: 19px;
}
</style>
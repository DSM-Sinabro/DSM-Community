<template>
  <div>
      <h1>HelloWorld!</h1>
      <div id = "helloDiv"></div>
  </div>
</template>


<script>
new Vue({
    el : "#helloDiv",
    name : "Hello"
})
Vue.component('Hello')
</script>

<style scoped>

.helloDiv{
    width : 100px;
    height : 100px;
    border : 1px solid black;
}
</style>




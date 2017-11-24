<template>
  <div id = "logoArea">
    <img v-on:click="gomain"src="../../assets/logo.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'Logo',
  methods: {
    gomain: function (event) {
      if (event) {
        location.href = '/'
        console.log('go to main!')
      }
    }
  }
}
</script>

<style scoped>
  img{
      width: 200px;
      display: block;
      float: left;
      cursor: pointer;
  }

  #logoArea{
      width: 300px;
      display: inline-block;
  }
</style>

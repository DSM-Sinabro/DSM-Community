<template>
  <div>
    <input type="text" id="big" onkeyup="enterkey();" />
  </div>
</template>

<script>
export default {
  name: 'Hashtag',
  methods: {
    enterkey: function () {
      if (window.event.keyCode === 13) {
      }
    }
  }
}
</script>

<style scoped>
div {
   display: inline-block; 
}
#big { 
    background-color: #ffdead;
    height: 30px;
    width: 120px;
    margin-left: 20px;
    margin-top: 0px;
    border-radius: 10px;
    font-size: 15px;
    padding-left: 10px;
    display: inline-block;
    /* border: 1px solid black; */
    box-shadow: 3px 3px 3px #999999;
}
</style>

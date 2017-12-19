<template>
  <div>
     <!-- <img src="../../assets/hashtag.png" id="img">  -->
    <input type="text" id="big" @keydown="enterkey" placeholder="해시태그" v-model="content"/>
  </div>
</template>

<script>
export default {
  name: 'Hashtag',
  methods: {
    enterkey: function (event) {
      if (event.key === 'Enter') {
        if (this.content !== '') {
          this.$emit('addTag', this.content)
          this.content = ''
        }
      }
    }
  },
  data: function () {
    return {
      content: ''
    }
  }
}
</script>

<style scoped>
div {
   display: inline-block; 
}

#big {
    background-color: white;
    height: 30px;
    width: 120px;
    margin-left: 29px; 
    margin-top: 20px; 
    /* border-radius: 10px; */
    font-size: 15px;
    padding-left: 10px;
    display: inline-block;
    /* border: 1px solid black; */
    /* box-shadow: 3px 3px 3px #999999; */
    /* border: 2px solid orange; */
    /* text-decoration: underline; */
    border-bottom: 2px solid lightgrey;
}

#big:focus {
  border-bottom: 2px solid orange;
}
/* #img{
  height: 25px;
  width: 20px;
   border-radius: 25px; 
  display: inline-block;
  margin-left: 20px;
   margin-top: 10px; 
} */
</style>
  
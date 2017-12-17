<template>
  <div id="bigdi">
    <hashtag :tags="tags"/>
  </div>
</template>

<script>
import Hashtag from '../HashTag'

export default {
  name: 'ShowHashtag',
  components: {
    Hashtag
  },
  props: [
    'tags'
  ]
}
</script>

<style>
#bigdi{
  background-color: transparent;
  width: 93%;
  /* border: 1px solid black; */
  margin-left: 27px;
  margin-top: 5px;
  display: block;
}
.small{
  display: inline-block;
  margin-left: 5px;
  /* background-color: #D5D5D5; */
  border-radius: 7px;
  margin-top: 7px;
  padding-left: 3px;
  padding-right: 3px;
  padding-bottom: 3px;
  color: white;  
  /* border: 2px solid orange; */
  font-size: 16px;
  background-color: orange;
}

</style>
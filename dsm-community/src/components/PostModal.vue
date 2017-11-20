<template>
    <div id="all">
        <title />
        <writing />
        <hashtag />
        <show-hashtag />
    </div>
</template>

<script>
import Hashtag from './PostModal/Hashtag'
import ShowHashtag from './PostModal/ShowHashtag'
import Title from './PostModal/Title'
import Writing from './PostModal/Writing'

export default {
  name: 'PostModals',
  components: {
    Hashtag,
    ShowHashtag,
    Title,
    Writing
  }
}
</script>

<style>
#all{
    height: 500px;
    width: 300px;
    background-color: black;
}
</style>

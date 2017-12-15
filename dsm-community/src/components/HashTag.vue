<template>
<div>
  <div class = "tag" v-for="tag in tags" :key="tag.id">
    <div class = "tag_title">{{ tag.title }}</div>
  </div>
</div>
</template>
<script>
export default {
  name: 'HashTag',
  data: function () {
    return {
      tags: [
          {title: '#나눔스퀘어'},
          {title: '#hello'}
      ]
    }
  }
}
</script>
<style scoped>

  .tag {
    padding-left: 12px;
    padding-right: 12px;
    height: 30px;
    border: 2px solid orange;
    margin-left: 13px;
    display: inline-block;
    vertical-align: middle;
    line-height: 29px;
    border-radius: 5px;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    color: orange;
    transition-duration: 0.2s;

  }

  .tag:hover {
    background-color: orange;
    color: white;
    transition-duration: 0.2s;
    
  }

  .tag_title {
    display: table-cell;
  }

</style>

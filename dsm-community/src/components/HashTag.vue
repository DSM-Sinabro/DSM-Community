<template>
<div>
  <div class="tag" v-for="(tag, index) in tags" :index="index" :key="tag.id">
    <div class="tag_title" @click="$emit('delete', index)">#{{ tag.title }}</div>
  </div>
</div>
</template>
<script>
export default {
  name: 'HashTag',
  props: [
    'tags'
  ]
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
    margin-bottom: 5px;
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

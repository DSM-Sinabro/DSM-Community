<template>
  <tr v-bind:post="post">
    <td colspan="2">{{ post.title }}</td>
    <td>{{ post.author }}</td>
    <td>{{ post.date }}</td>
    <td>{{ post.view }}</td>
  </tr>
</template>

<script>
export default {
  name: 'Post',
  props: ['post']
}
</script>

<style scoped>
  td{
    color:#000000;
    padding: 17px;
    font-size: 1rem;
    width: 25%;
    text-align: center; 
    border-bottom: 1px solid #D5D5D5;
  }
</style>

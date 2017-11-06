<template>
  <table>
      <tr v-bind:post="post">
        <td id="p-title">{{ post.title }}</td>
        <td id="p-name">{{ post.author }}</td>
        <td id="p-date">{{ post.date }}</td>
        <td id="p-view">{{ post.view }}</td>
      </tr>
  </table>
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
  padding: 15px;
  font-size: 1rem;
  text-align: center; 
  border-bottom: 1px solid #D5D5D5;
  cursor: pointer;
}
</style>

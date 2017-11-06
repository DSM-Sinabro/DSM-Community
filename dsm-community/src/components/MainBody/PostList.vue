<template>
  <tr v-bind:post="post">
    <td id="p-title">{{ post.title }}</td>
    <td id="p-name">{{ post.author }}</td>
    <td id="p-date">{{ post.date }}</td>
    <td id="p-view">{{ post.view }}</td>
  </tr>
</template>

<script>
export default {
  name: 'Post',
  props: ['post']
}
</script>

<style scoped>
  td
  {
    padding: 15px;
    font-size: 1rem;
    text-align: center; 
    font-family: "Nanum Gothic", sans-serif; 
    cursor: pointer;
  }

  #p-title
  {
    width: 40%;
    font-weight: bold;
  }

  #p-name, #p-date, #p-view
  {
    color : #5D5D5D;
    width: 20%;
  } 
  
</style>

<template>
  <tr v-bind:post="post">
    <td style="font-weight: bold">{{ post.title }}</td>
    <td style="color: #494A4B;">{{ post.author }}</td>
    <td style="color: #95989A; font-weight: bold">{{ post.date }}</td>
    <td style="color: #95989A; font-weight: bold">{{ post.view }}</td>
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
    padding: 15px;
    font-size: 1rem;
    width: 25%;
    text-align: center; 
    border-bottom: 1px solid #D5D5D5;
    font-family: "Nanum Gothic", sans-serif; 
    cursor: pointer;
  }
</style>

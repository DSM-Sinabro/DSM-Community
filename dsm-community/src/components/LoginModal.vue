<template>
  <div id="login-modal">
    <input type="text" placeholder="ID">
    <input type="text" placeholder="PW">
  </div>
</template>

<script>
export default {
  name: 'LoginModal'
}
</script>

<style scoped>
#login-modal {
  width: 30vw;
  height: 30vh;
  background-color: rgb(150, 150, 150);
  border-radius: 3px;
  margin: auto;
}
</style>



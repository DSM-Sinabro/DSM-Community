<template>
  <div id="password">
    <span id="text-password">비밀번호</span>
    <input type="password">
    <p><button v-on:click="PageChange" type="button">확인</button></p>
  </div>
</template>

<script>
export default {
  name: 'ModifiedInformation',
}
</script>

<style scoped>

#password {
  height: 20vh;
  text-align: center;
  border: 2px solid #D8D8D8;
  border-width: 1px 2px 2px 2px;
}

#text-password {
  font-size: 1.2rem; 
  line-height: 13vh;
}

input {
  border: 1px solid #000000;
  line-height: 2.3vh;
}

button {
  height: 30px;
  width: 50px;
  border: 1px solid #5D5D5D;
  font-size: 1rem;
  color: #5D5D5D;
  background-color: #ffffff;  
}
</style>



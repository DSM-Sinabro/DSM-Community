<template>
  <div id="password">
    <span id="text-password">비밀번호</span>
    <input type="password">
    <button type="button" @click="$emit('checked')">확인</button>
  </div>
</template>

<script>
export default {
  name: 'CheckPassword'
}
</script>

<style scoped>

#password {
  height: 200px;
  text-align: center;
  border: 2px solid #D8D8D8;
  border-width: 1px 2px 2px 2px;
}

#text-password {
  font-size: 1.2rem; 
  line-height: 170px;
}

input {
  border: 1px solid #000000;
  height: 30px;
  font-size: 20px;
}

button {
  height: 30px;
  width: 50px;
  border: 1px solid #5D5D5D;
  font-size: 1rem;
  color: #5D5D5D;
  background-color: #ffffff;  
  cursor: pointer;
}
</style>



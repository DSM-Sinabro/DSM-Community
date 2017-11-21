<template>
  <div id="modify">
    <table>
      <tr>
        <td>이름</td>
        <td><input type="text"></td>
      </tr>
      <tr>
        <td>Email</td>
        <td><input type="text"></td>
      </tr>
      <tr>
        <td>Facebook</td>
        <td><input type="facebook"></td>
      </tr>
      <tr>
        <td>Github</td>
        <td><input type="github"></td>
      </tr>
      <button type="button">닫기</button>
      <button type="button">완료</button>
    </table>
  </div>
</template>
<script>
export default {
  name: 'ModifiedInformation'
}
</script>

<style scoped>

#modify {
  width: 712px;
  height: 30vh;
  text-align: center;
  border: 2px solid #D8D8D8;
  border-width: 1px 2px 2px 2px;
}

input {
  border: 1px solid #000000;
  height: 2vh;
}

table { 
  font-size: 20px;
  margin: auto; 
}

button {
  height: 30px;
  width: 50px;
  border: 1px solid #5D5D5D;
  font-size: 1rem;
  color: #5D5D5D;
  background-color: #ffffff;  
  cursor: pointer;
  margin: 10px;
}
</style>


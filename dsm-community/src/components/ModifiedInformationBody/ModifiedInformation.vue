<template>
  <div id="modify">
    <table>
      <tr>
        <td>이름</td>
        <td><input type="text" v-model="name">{{ name }}</td>
      </tr>
      <tr>
        <td>Email</td>
        <td><input type="text" v-model="email">{{ email }}</td>
      </tr>
      <tr>
        <td>Facebook&nbsp</td>
        <td><input type="text" v-model="facebook">{{ facebook }}</td>
      </tr>
      <tr>
        <td>Github</td>
        <td><input type="text" v-model="github">{{ github }}</td>
      </tr>
      <tr>
        <td id="button-board" colspan="2">
          <button type="button">닫기</button>
          <button type="button">완료</button>
        </td>
      </tr>

    </table>
  </div>
</template>
<script>
export default {
  name: 'ModifiedInformation',
  data: function () {
    return {
      name: '',
      email: '',
      facebook: '',
      github: ''
    }
  }
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

table {
  padding-top: 5vh;
}
input {
  border: 1px solid #000000;
  height: 23px;
  width: 300px;
  font-size: 16px;
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

#button-board {
  padding-top: 3vh;
}
</style>


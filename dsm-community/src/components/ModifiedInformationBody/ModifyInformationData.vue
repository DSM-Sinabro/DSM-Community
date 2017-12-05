<template>
  <div id="modify">
    <table>
      <tr>
        <td>이름</td>
        <td>{{ name }}</td>
      </tr>
      <tr>
        <td>Email</td>
        <td>{{ email }}</td>
      </tr>
      <tr>
        <td>Facebook&nbsp</td>
        <td>{{ facebook }}</td>
      </tr>
      <tr>
        <td>Github</td>
        <td>{{ github }}</td>
      </tr>
      <tr>
        <td id="button-board" colspan="2">
          <button type="button">닫기</button>
          <button type="button" @click="$emit('checked')">수정</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ModifyInformationDate',
  props: [
    'email',
    'name',
    'facebook',
    'github'
  ]
}
</script>

<style scoped>

#modify {
  width: 712px;
  height: 280px;
  text-align: center;
  border: 2px solid #D8D8D8;
  border-width: 1px 2px 2px 2px;
}

table {
  padding-top: 50px;
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
  margin-top: 10px;
}

#button-board {
  padding-top: 30px;
}
</style>


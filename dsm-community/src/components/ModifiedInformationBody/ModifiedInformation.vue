<template>
  <div id="modify">
    <table>
      <tr>
        <td>이름</td>
        <td><input type="text"></td>
      </tr>
      <tr>
        <td>email</td>
        <td><input type="text"></td>
      </tr>
      <tr>
        <td>비밀번호 변경</td>
        <td><input type="password"></td>
      </tr>
      <tr>
        <td>비밀번호 확인</td>
        <td><input type="password"></td>
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
  height: 30vh;
  text-align: center;
  border: 2px solid #D8D8D8;
  border-width: 1px 2px 2px 2px;
}

input {
  border: 1px solid #000000;
  line-height: 2.3vh;
}
</style>



<template>
  <div id="background">
     <top-bar />
    <div id="mypage-changepassword">
      <span>마이페이지</span>
      <div id="changepassword-board">
        <div id="changepassword-bar">
          <span>비밀번호변경</span>
        </div>
        <div id="changepassword">
          <table>
            <tr>
              <td>현재비밀번호</td>
              <td><input type="text" v-model="name"></td>
            </tr>
            <tr>
              <td>비밀번호변경</td>
              <td><input type="text" v-model="email"></td>
            </tr>
            <tr>
              <td>비밀번호확인</td>
              <td><input type="text" v-model="facebook"></td>
            </tr>
            <tr>
              <td id="button-board" colspan="2">
                <button type="button">닫기</button>
                <button type="button">완료</button>
              </td>
           </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from '../components/TopBar'

export default {
  name: 'ChangePassword',
  components: {
    TopBar
  }
}
</script>

<style scoped>

</style>
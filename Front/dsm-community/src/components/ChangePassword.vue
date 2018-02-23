<template>
  <div id="background">
    <top-bar />
    <div id="mypage-changepassword">
      <span id="mypage">마이페이지</span>
      <div id="changepassword-board">
        <div id="changepassword-bar">
          <span id="text-bar">비밀번호변경</span>
        </div>
        <div id="changepassword">
          <table>
            <tr>
              <td>현재비밀번호&nbsp</td>
              <td><input type="text" v-model="name"></td>
            </tr>
            <tr>
              <td>비밀번호변경&nbsp</td>
              <td><input type="text" v-model="email"></td>
            </tr>
            <tr>
              <td>비밀번호확인&nbsp</td>
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
#background {
    background-image: url("../assets/background.png");
    background-size: cover;
}

#mypage-changepassword {
  position: relative;
  width: 712px;
  margin: auto;
  margin-top: 200px;
}

#changepassword-board {
  width: 712px;
  height: 360px;
  margin-top: 1%;
}

#changepassword-bar {
  border-bottom: 2px solid orange;
  height: 80px;
  background:linear-gradient(to bottom,#F48E16, #FFB35A);
  color: white;
  font-size: 1.5rem;
  text-align: center;
}

#text-bar {
  line-height: 80px;
  font-size: 1.4rem;
  padding-left: 2%;
}

#mypage{
  font-size: 2rem;
  margin-left: 1.5%;
  cursor: pointer;
}

#changepassword {
  width: 712px;
  height: 280px;
  text-align: center;
  border: 2px solid #D8D8D8;
  border-width: 1px 2px 2px 2px;
}

table {
  padding-top: 50px;
  font-size: 20px;
  margin: auto; 
}

input {
  border: 1px solid #000000;
  height: 23px;
  width: 300px;
  font-size: 16px;
  vertical-align: 3px;
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
  padding-top: 30px;
}
</style>
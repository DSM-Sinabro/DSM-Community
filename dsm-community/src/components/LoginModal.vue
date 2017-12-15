<template>
  <div id="background">
    <div id="login">    
      <div id="register">
        <p>Login</p>
        <input id="close" type="BUTTON" value="X" v-on:click="$emit('toggleLogin')">
        </div>
        <form>
          <input type="text" class="input"placeholder="email" id="first" v-on:change="getId" required>
          <input type="password" id="pass"  class="input" placeholder="password" v-on:change="getPw" required>
          <br />
          <div>
            <div id="GoJoin">아직 회원이 아니신가요?</div>
            <button id="Join">회원가입</button>
          </div>
          <button id="end" v-on:click="login">Login</button>
        </form>
      </div>
  </div>
</template>

<script>
var userId
var userPw
var getId
var getPw
export default {
  name: 'LoginModal',
  methods: {
    login: function () {
      this.$http.get('/auth/login', JSON.stringify({password: this.password}), {
        headers: {
          'Content-Type': 'application/json'
        }})
        .then((result) => {
          userId = result.id
          userPw = result.pw
          console.log(userId)
          console.log(userPw)
        }).catch(function (error) {
          if (error) {
            console.log(error)
          }
        })
      if (userId === getId && userPw === getPw) {
        console.log('login success')
        this.$emit('toggleLogin')
      } else if (userId === getId && userPw !== getPw) {
        console.log('check your pw')
      } else if (userId !== getId && userPw === getPw) {
        console.log('check your id')
      } else {
        console.log('you are not a member')
      }
    },
    getId: function (event) {
      getId = event.target.value
      console.log('input id is = ' + getId)
    },
    getPw: function (event) {
      getPw = event.target.value
      console.log('input pw is =' + getPw)
    }
  }
}
</script>

<style>
#background {
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit outline: ;n top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

#login {
    width: 430px;
    height: 360px;
    position: absolute;
    float: right;
    right: calc(50% - 430px /2);
    top: calc(50% - 350px / 2);
    z-index: 100;
    background-color: white;
    border-radius: 10px;
    /* border: 1px solid rgb(220, 220, 220); */
}
#register{
    color: white;
    background:linear-gradient(to bottom,#F48E16, #FFB35A);
    font-size: 30px;
    text-align: center;
    height: 75px;
    width: 430px;
    /* padding-top: 15px; */
    position: relative;
    display: table-cell;
    vertical-align: middle;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
#close{
    float: right;
    position: relative;
    background-color:transparent;
    color: white;
    cursor: pointer;
    position: absolute;
    right: 0;
    margin-right: 10px;
    margin-top: -10px;
  }

#first{
    background-image:url(../assets/id.png);
    background-repeat: no-repeat;
    background-position: 5px;
    background-size: 10% 80%;
    padding-left: 10%;
    margin-top: 40px;
}
#pass{
    background-image:url(../assets/password.png);
    background-repeat: no-repeat;
    background-position: 5px;
    background-size: 10% 80%;
    padding-left: 10%;

}

.input{
    width: 260px;
    height: 33px;
    margin-top: 28px;
    margin-left: 30px;
    border: 0.1px solid #F69523;
    margin-left: 80px;
}

#end{
    height: 45px;
    width: 110px;
    margin: auto;
    margin-top: 20px;
    border: 3px solid #F49019;
    font-size: 20px;
    color: #F49019;
    background-color: white;
    display: block;
    cursor: pointer;
}
#GoJoin{
     /* width: 190px; */
    /* height: 30px; */
    color: #F49019;
    font-size: 14px;
    padding-top: 15px;
    padding-left: 110px;
    display: inline-block;
}
#Join{
    display: inline-block;
    background-color:white;
    color:#F49019; 
    width: 60px;
    height: 10px;
    cursor: pointer;
}
p{
  display: inline-block;
}
</style>

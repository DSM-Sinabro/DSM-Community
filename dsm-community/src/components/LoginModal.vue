<template>
  <div id="login">
      <div id="register">Login
          <input id="close" type="BUTTON" value="X" onClick='window.Click();'>
      </div>
      <input type="text" class="input"placeholder="email" id="first">
      <input type="password" id="pass"  class="input" placeholder="password"> <br />
      <div id="GoJoin">아직 회원이 아니신가요?</div>
      <button id="Join">회원가입</button>
      <button id="end">Sign Up</button>
  </div>
</template>

<script>
export default {
  name: 'LoginModal'
}
</script>

<style>
#login{
    width: 430px;
    height: 350px;
    margin-left: 420px;
    margin-top: 150px;  
}
#register{
    color: white;
    background:linear-gradient(to bottom,#F48E16, #FFB35A);
    font-size: 30px;
    text-align: center;
    height: 75px;
    width: 430px;
    padding-top: 15px;
}
#close{
    float: right;
    position: relative;
    margin-top: -15px;
    background-color:transparent;
    color: white;

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
    margin-left: 150px;
    margin-top: 20px;
    border: 3px solid #F49019;
    font-size: 20px;
    color: #F49019;
    background-color: white;
    display: inline-block;
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

}
</style>

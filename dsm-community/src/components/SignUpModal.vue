<template>
  <div id="signup">
      <div id="register">Member Registration
          <input id="close" type="BUTTON" value="X" onClick='window.Click();'>
      </div>
      <input type="text" class="input"placeholder="email" id="first" >
      <button type="button" onClick='SendCode()'>Send code</button> <br />
      <input type="password" id="pass"  class="input" placeholder="password"> <br />
      <input type="password" id="con"class="input" placeholder="password confirm"> <br />
      <input type="text"id="code" class="input" placeholder="certify code">
      <button type="button">Authenticate</button><br />
      <button id="end">Sign Up</button>
  </div>
</template>

<script>
export default {
  name: 'SignUpModal'
}

</script>

<style scoped>
#signup{
    width: 430px;
    height: 450px;
    margin-left: 34%;
    margin-top: 100px;
    background-color: white;

}
#register{
    background:linear-gradient(to bottom,#F48E16, #FFB35A);
    height: 75px;
    width: 430px;
    color: white;
    font-size: 30px;
    text-align: center;
    padding-top: 18px;  
}
.input{
    width: 260px;
    height: 33px;
    margin-top: 28px;
    margin-left: 30px;
    border: 0.1px solid #F69523;
}
#first{
    margin-top: 35px;
    background-image:url(../../assets/id.png);
    background-repeat: no-repeat;
    background-position: 5px;
    background-size: 10% 80%;
    padding-left: 10%;
}
button{
    height: 33px;
    width: 88px;
    background-color: white;
    box-shadow: 0;
    border: 1px solid #F69523;
    color: #8D8D8D;
    position: relative;
    margin-left: -7px; 
    cursor: pointer;

}
#end{
    height: 50px;
    width: 120px;
    margin-left: 150px;
    margin-top: 30px; 
    border: 3px solid #F49019;
    font-size: 20px;
    color: #F49019;
}
#pass{
    background-image:url(../../assets/password.png);
    background-repeat: no-repeat;
    background-position: 5px;
    background-size: 10% 80%;
    padding-left: 10%;
}
#con{
     background-image:url(../../assets/passwordCon.png);
    background-repeat: no-repeat;
    background-position: 5px;
    background-size: 10% 80%;
    padding-left: 10%;

}
#code{
    background-image:url(../../assets/certifyCode.png);
    background-repeat: no-repeat;
    background-position: 5px;
    background-size: 8% 80%;
    padding-left: 10%;
}
#close{
    text-align: none;
    border: 0px;
    background-color: white;
    box-shadow: 1px gray;
    float: right ;
    position: relative;
    margin-top: -18px;
    color: white;
    width: 15px;
    height: 15px;
    background-color:transparent;
    cursor: pointer;

}
</style>        

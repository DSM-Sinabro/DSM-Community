<template>
  <div id="signup">
      <div id="register">Member Registration
          <input id="close" type='BUTTON' value="X" onClick='window.Click();'>
      </div>
      <input type="text" class="input"placeholder="email" id="first" >
      <button type="button">send code</button> <br />
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
    /* border: 1px solid black; */
    margin-left: 34%;
    margin-top: 30px;
    /* border: 1px solid black;     */
    /* box-shadow: 8px 8px 0 0 #A6A6A6; */

}
#register{
    background:linear-gradient(to bottom,#F48E16, #FFB35A);
    height: 65px;
    width: 430px;
    color: white;
    font-size: 30px;
    text-align: center;
    padding-top: 18px;  
}
.input{
    width: 260px;
    height: 28px;
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
    height: 28px;
    background-color: white;
    box-shadow: 0;
    border: 1px solid #F69523;
    color: #8D8D8D; 
}
#end{
    height: 50px;
    width: 120px;
    margin-left: 150px;
    margin-top: 30px;
    border: none;
    background-color: #F49019;
    color: white;
    font-size: 20px;
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
    float: right;
    position: relative;
    margin-top: -18px;
    color: gray;
}
</style>

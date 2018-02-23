<template>
  <div id="all">
      <div id="login">
      <div id="register">Changepassword
          <input id="close" type="BUTTON" value="X" v-on:click="changepw">
      </div>
      <input type="password" class="input"placeholder="password" id="first"> <br />
      <input type="password" id="pass"  class="input" placeholder="new password"> <br />
      <input type="password" id="pass"  class="input" placeholder="new password"> <br />
      <button id="end">
Confirm</button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'ChangePwModal',
  methods: {
    chagepw: function () {
      this.emit('toggleChangePw')
      console.log('toggleChangePw')
    }
  }
}
</script>

<style>
#all{
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
}
#login{
    height: 350px;
    width: 430px;
    position: absolute;
    right: calc(50% - 430px / 2);
    top: calc(50% - 350px / 2);
    z-index: 100;
    background-color: white;
}
#register{
    color: white;
    background:linear-gradient(to bottom,#F48E16, #FFB35A);
    font-size: 30px;
    height: 75px;
    width: 430px;
    padding-top: 15px;
    text-align: center;
}
#close{
    float: right;
    position: relative;
    margin-top: -15px;
    background-color:transparent;
    color: white;
    cursor: pointer;
}
#first{
    background-image:url(../assets/password.png);
    background-repeat: no-repeat;
    background-position: 5px;
    background-size: 10% 80%;
    padding-left: 45px;
    margin-top: 40px;
}
#pass{
    background-image:url(../assets/password.png);
    background-repeat: no-repeat;
    background-position: 5px;
    background-size: 10% 80%;
    padding-left: 45px;

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
    margin-top: 30px;
    border: 3px solid #F49019;
    font-size: 20px;
    color: #F49019;
    background-color: white;
    cursor: pointer;
}
</style>

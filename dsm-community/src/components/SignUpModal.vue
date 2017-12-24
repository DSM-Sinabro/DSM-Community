<template>
  <div id="background">      
    <div id="signup">
      <div id="register">Member Registration
        <input id="close" type="BUTTON" value="X" @click="$emit('close')">
      </div>
      <div>
        <input type="text" placeholder="name" id="named" class="input" v-model="name" required>
      </div>
      <div>
        <input type="text" class="input" placeholder="email" id="first" v-model="email" required>
        <button type="button" v-on:click='sendCode()'>Send code</button> <br />
      </div>
      <input type="password" id="pass"  class="input" placeholder="password" v-model="pw" required> <br />
      <input type="password" id="con" class="input" placeholder="password confirm" v-model="conpw" required> <br />
      <div>
        <input type="text" id="code" class="input" placeholder="certify code" v-model="code" required>
        <button type="button" v-on:click= "authenticateCode">Authenticate</button><br />
      </div>
      <button id="end" @click="signup">Sign Up</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUpModal',
  methods: {
    sendCode: function () {
      this.$http.post('/auth/email', JSON.stringify({
        email: this.email
      }), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': `http://13.124.15.202:8080`
        }
      }).then(function (response) {
        console.log('sendCode')
      }).catch(function (error) {
        if (error.response) {
          // 요청 이루어짐. 서버가 2XX번대 이상 상태코드 응답
          // he request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          // 요청했는데 응답이 없을 때
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request)
        } else {
           // Something happened in setting up the request that triggered an Error
          console.log(error.config)
        }
      })
    },
    signup: function () {
      this.$http.post('/auth/signup', JSON.stringify({
        name: this.name,
        email: this.email,
        pw: this.pw,
        conpw: this.conpw,
        code: this.code
      }), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://13.124.15.202:8080'
        }
      }).then(function (response) {
        window.location.reload()
      }).catch(function (error) {
        console.log(error)
        alert('회원가입 실패')
      })
    },
    authenticateCode: function () {
      this.$http.post('/auth/configemail', JSON.stringify({
        code: this.code
      }), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://13.124.15.202:8080'
        }
      }).then(function (response) {
        console.log('authenticateCode')
      }).catch(function (error) {
        console.log(error)
        console.log('fail to authenticate Code')
      })
    }
  },
  data: function () {
    return {
      name: '',
      email: '',
      pw: '',
      conpw: '',
      code: ''
    }
  }
}
</script>

<style scoped>
#background {
    position: fixed; /* Stay in place */
    z-index: 5; /* Sit outline: ;n top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

#signup {
    width: 430px;
    height: 500px;
    position: absolute;
    float: right;
    right: calc(50% - 430px /2);
    top: calc(50% - 500px / 2);
    z-index: 100;
    background-color: white;
    border-radius: 10px;
}

#register {
    background:linear-gradient(to bottom,#F48E16, #FFB35A);
    height: 75px;
    width: 430px;
    color: white;
    font-size: 30px;
    text-align: center;
    padding-top: 18px;
    border-radius: 10px 10px 0 0;
}

.input {
    width: 260px;
    height: 33px;
    margin-top: 28px;
    margin-left: 30px;
    border: 0.1px solid #F69523;
}

#first {
    margin-top: 35px;
    background-image:url(../assets/id.png);
    background-repeat: no-repeat;
    background-position: 5px;
    background-size: 10% 80%;
    padding-left: 8%;
}

button {
    height: 33px;
    width: 88px;
    background-color: white;
    box-shadow: 0;
    border: 1px solid #F69523;
    color: #8D8D8D;389 ld
    position: relative;
    margin-left: -7px; 
    cursor: pointer;
}

#end {
    height: 50px;
    width: 120px;
    margin-left: 150px;  
    margin-top: 30px;   
    border: 3px solid #F49019;
    font-size: 20px;
    color: #F49019;
    float: center;
}

#pass {
    background-image:url(../assets/password.png);
    background-repeat: no-repeat;
    background-position: 5px;
    background-size: 10% 80%;
    padding-left: 8%;
}

#con {
     background-image:url(../assets/passwordCon.png);
    background-repeat: no-repeat;
    background-position: 5px;
    background-size: 10% 80%;
    padding-left: 8%;
}

#code {
    background-image:url(../assets/certifyCode.png);
    background-repeat: no-repeat;
    background-position: 10px;
    background-size: 8% 80%;
    padding-left: 8%;
}

#close {
    text-align: none;
    border: 0px;
    box-shadow: 1px gray;
    float: right;
    color: white;
    position: relative;
    top: -10px;
    right: 5px;
    width: 15px;
    height: 15px;
    background-color:transparent;
    cursor: pointer;
}

 #named {
    background-image: url(../assets/tag.png);
    background-repeat: no-repeat;
    background-position: 7px;
    background-size: 8% 80%;
    padding-left: 8%;
} 
</style>        
    
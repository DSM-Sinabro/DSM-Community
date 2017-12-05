<template>
  <div id="modify">
    <table>
      <tr>
        <td>이름</td>
        <td><input type="text" v-model="name"></td>
      </tr>
      <tr>
        <td>Email</td>
        <td><input type="text" v-model="email"></td>
      </tr>
      <tr>
        <td>Facebook&nbsp</td>
        <td><input type="text" v-model="facebook"></td>
      </tr>
      <tr>
        <td>Github</td>
        <td><input type="text" v-model="github"></td>
      </tr>
      <tr>
        <td id="button-board" colspan="2">
          <button type="button">닫기</button>
          <button type="button" @click="complete">완료</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ModifyInformation',
  props: [
    'email',
    'name',
    'github',
    'facebook'
  ],
  methods: {
    complete: function () {
      this.$http.post('/url', JSON.stringify({name: this.name, email: this.email, facebook: this.facebook, github: this.github}), {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        this.$emit('checked', this.name, this.email, this.facebook, this.github)
      }).catch(err => {
        console.log(err)
      })
    }
  }
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
  font-size: 20px;
  margin: auto; 
  padding-top: 50px;
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


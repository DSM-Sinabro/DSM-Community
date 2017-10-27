<template>
    <div id="login">
        <h1>Login page</h1>
        <login-modal></login-modal>
        <hello-world></hello-world>
    </div>
</template>

<script>
import LoginModal from '../components/LoginModal'
import HelloWorld from '../components/HelloWorld'

export default {
  name: 'Login',
  components: {
    LoginModal,
    HelloWorld
  }
}
</script>


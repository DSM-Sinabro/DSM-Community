<template>
    <div id="login">
        <h1>Login page</h1>
        <login-modal></login-modal>
    </div>
</template>

<script>
import LoginModal from '../components/LoginModal'

export default {
  name: 'Login',
  components: {
    LoginModal
  }
}
</script>


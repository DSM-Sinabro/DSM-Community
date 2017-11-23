<template>
    <div id = "info-content">
         <user />
         <user-info />
        <modify /> 
    </div>
</template>
<script>
import Modify from './Info/Modify'
import User from './Info/User'
import UserInfo from './Info/UserInfo'

export default {
  name: 'Info',
  components: {
    Modify,
    User,
    UserInfo
  }
}
</script>
<style scoped>
    #info-content{
        width: 100%;
        height: 30%;
        /* border: 1px solid black */
    }
</style>

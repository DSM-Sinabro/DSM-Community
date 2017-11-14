<template>
    <div class = "info-content">
        <modify />
        <div class = "user-info"></div>
        <div class = "modify"></div>
    </div>
</template>
<script>
import Modify from './Components/User/Modify'
export default {
  name: 'Info',
  component: {
    Modify
  }
}
</script>
<style scoped>
    .info-content{
        width: 100%;
        height: 30%;
        border: 1px solid black;
    }
</style>

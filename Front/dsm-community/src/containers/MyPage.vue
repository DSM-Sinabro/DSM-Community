<template>
  <div>
    <top-bar />
    <my-page-content :title="title" @toggleChangePw="onToggleChangePw"/>
    <change-pw-modal v-show="showChangePw" v-on:toggleChangePw="onToggleChangePw" />
  </div>
</template>

<script>
import TopBar from '../components/TopBar'
import MyPageContent from '../components/MyPageContent'
import ChangePwModal from '../components/ChangePwModal'
export default {
  name: 'MyPage',
  components: {
    TopBar,
    MyPageContent,
    ChangePwModal
  },
  data: function () {
    return {
      showChangePw: false,
      title: ''
    }
  },
  methods: {
    onToggleChangePw: function () {
      this.showChangePw = !this.showChangePw
      console.log('onToggleChangePw')
    }
  }
}
</script>

<style scoped>
  #background {
    background-image: url("../assets/background.png")
  }
</style>


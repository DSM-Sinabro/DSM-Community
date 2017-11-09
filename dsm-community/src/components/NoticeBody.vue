<template>
  <div>
    <top-bar />
    <search-notice />
  </div>
</template>

<script>

import TopBar from './TopBar'
import SearchNotice from './SearchNotice'
import MainNotice from './MainNotice'

export default {
  name: 'Main',
  components: {
    TopBar,
    MainNotice,
    SearchNotice
  }
}
</script>

<style scoped>

</style>
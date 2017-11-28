<template>
  <div class = "main-Content">
      <project />
      <study />
      <club />
      <contest />
  </div>
</template>
<script>
import Club from './Recruit/Club'
import Contest from './Recruit/Contest'
import Project from './Recruit/Project'
import Study from './Recruit/Study'

export default {
  name: 'Recruit',
  components: {
    Club,
    Contest,
    Project,
    Study
  }
}
</script>
<style scoped>
    .main-Content{
        width: 100%;
        height: 70%;
        /* border: 1px solid black; */
    }
</style>

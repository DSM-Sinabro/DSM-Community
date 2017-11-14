<template>
  <div class = "mainContent">
      <project />
      <study />
      <club />
      <contest />
      <!-- 프로젝트 모집
      스터디 모집
      동아리모집
      대회모집 -->
  </div>
</template>
<script>
import Club from './components/Club'
import Contest from './components/Contest'
import Project from './components/Project'
import Study from './components/Study'

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
    .mainContent{
        width: 100%;
        height: 70%;
        border: 1px solid black;
    }
</style>

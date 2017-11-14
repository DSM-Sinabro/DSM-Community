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
import Club from './components/Recruit/Club'
import Contest from './components/Recruit/Contest'
import Project from './components/Recruit/Project'
import Study from './components/Recruit/Study'

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

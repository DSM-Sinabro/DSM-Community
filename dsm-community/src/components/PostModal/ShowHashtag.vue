<template>
  <div id="bigdi">
    <div class="small">#김건</div>
    <div class="small">#박해빈</div>
    <div class="small">#박지은</div>
    <div class="small">#해커톤</div>
    <div class="small">#프로젝트원모집해요</div>
    <div class="small">#오경태</div>
    <div class="small">#시나브로동아리원모집</div>
    <div class="small">#같이공부할사람구해요</div>
    <div class="small">#포지션백엔드</div>
    <div class="small">#프론트엔드개발자구해요</div>
    <!--해시태그 button으로-->
  </div>
</template>

<script>
export default {
  name: 'ShowHashtag'
}
</script>

<style>
#bigdi{
  background-color: transparent;
  width: 750px;
  height: 57px;
  /* border: 1px solid black; */
  margin-left: 27px;
  margin-top: 5px;
  display: block;
}
.small{
  display: inline-block;
  margin-left: 5px;
  /* background-color: #D5D5D5; */
  border-radius: 7px;
  margin-top: 7px;
  padding-left: 3px;
  padding-right: 3px;
  padding-bottom: 3px;
  color: white;  
  /* border: 2px solid orange; */
  font-size: 16px;
  background-color: orange;
}

</style>
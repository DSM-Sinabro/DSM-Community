<template>
  <div class = "modify">
      <div class = "box">
        <button class = "pw">비밀번호 변경</button>
        <button class = "pf">프로필 수정</button>
      </div>
  </div>
</template>
<script>
export default {
  name: 'Modify'
}
</script>
<style scoped>
    .modify{
        width : 25%;
        height : 100%;
        /* background-color: blue; */
        float: left;
        line-height: 20px;
        background-color:#F4a74e;

        /* vertical-align: middle; */
    }

    .box{
        text-align: center;
        display: block;
        height: 100%;
        vertical-align: middle;
        margin: auto;
        width: 100px;
    }
    button{
        width: 100px;
        height: 25px;
        vertical-align: middle;
        cursor: pointer;
        border: 1px solid #F69523;
    }
    .pw{
        margin-top: 55px;
        margin-bottom: 20px;
    }

</style>

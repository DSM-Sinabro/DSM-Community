<template>
  <div class = "modify">
      <div class = "box">
        <button class = "pw">비밀번호 변경</button>
        <button>프로필 수정</button>
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
        background-color: blue;
        float: left;
        line-height: 20px;

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
    }
    .pw{
        margin-top: 60px;
        margin-bottom: 20px;
    }

</style>

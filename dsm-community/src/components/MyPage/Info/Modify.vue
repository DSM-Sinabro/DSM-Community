<template>
  <div class = "modify">
      <div class = "box">
        <button class = "pw">비밀번호 변경</button>
        <router-link class = "router" to = "/Mypage/modify">
            <button class = "pf">프로필 수정</button>
        </router-link>
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
        float: left;
        background-color:#F4a74e;
        text-align: center;
        display: table;
    }

    .box{
        text-align: center;
        display: table-cell;
        vertical-align: middle;
        margin: 0 auto;
        width: 100px;
        clear: both;
        margin: auto;
    }
    .pw{
        margin-bottom: 30px;        
    }

    button{
        width: 120px;
        height: 30px;
        vertical-align: middle;
        cursor: pointer;
        border: 1px solid #F69523;
        display: table-cell;
    }

    .router{
        text-decoration: none;
    }

</style>

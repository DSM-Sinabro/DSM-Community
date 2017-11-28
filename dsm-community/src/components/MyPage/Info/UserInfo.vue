<template>
  <div class = "info">
    <div class = "table-box">
    <table class = "user_table" >
      <tr >
        <td class = "key">ID : </td>
        <td class = "content">jieunjieun</td>
      </tr>
      <tr>
        <td class = "key">Github :</td>
        <td class = "content">jieunjieun</td>
      </tr>
      <tr>
        <td class = "key">facebook :</td>
        <td class = "content">jieun.jieunjieunjieun</td>
      </tr>
      <tr>
        <td class="key">Email :</td>
        <td class = "content">jieun0903@gmail.com</td>
      </tr>
    </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo'
}
</script>

<style scoped>

    .info{
        width: 50%;
        height: 100%;
        float: left;
        background-color:#F4a74e;
        display: table;
   }

   .key{
     float: right;
   }

  .table-box{
    display: table-cell;
    vertical-align: middle;
    width: 250px;
    margin: auto;
    line-height: 30px;
  }

  .user_table{
    width: 250px;
    margin: auto;
  }
</style>

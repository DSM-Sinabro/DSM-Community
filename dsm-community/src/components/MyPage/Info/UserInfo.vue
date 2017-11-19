<template>
  <div class = "info">
    <table>
      <tr>
        <td class = "key">ID : </td>
        <td>jieunjieun</td>
      </tr>
      <tr>
        <td class = "key">Github :</td>
        <td>jieunjieun</td>
      </tr>
      <tr>
        <td class = "key">facebook :</td>
        <td>jieun.jieunjieunjieun</td>
      </tr>
    </table>
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
        background-color: yellow;
        line-height: 100%;
        display: table;
        vertical-align: middle;
   }

    .key{
      text-align: right;
    }

    table{
      /* display: inline-block; */
      width:250px;
      height: 100px;
      margin: auto;
      vertical-align: middle;
      display: table-cell;
    }
    tr{
      vertical-align: middle;
    }
</style>


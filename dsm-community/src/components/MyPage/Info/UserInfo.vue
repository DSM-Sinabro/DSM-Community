<template>
  <div class = "info">
    <table align = "center">
      <tr >
        <td class = "key" >ID : </td>
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
        /* background-color: yellow; */
        line-height: 100%;
        display: table;
        vertical-align: middle;
   }

    .key{
      text-align: right;
    }

    table{
      /* display: inline-block; */
      width:300px;
      height: 100px;
      margin-left: auto;
      margin-right: auto;
      vertical-align: middle;
      display: table-cell;
      align-items: center;
      border-spacing: 15px;
    }
    td{
      padding-left: 20px;
      margin-bottom: 20px;
    }
    tr{
      
    }
</style>


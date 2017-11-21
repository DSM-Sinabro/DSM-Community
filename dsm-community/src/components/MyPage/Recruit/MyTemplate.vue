<template>
  <div>
      <div class = "title">
        <div class = "project_text">{{ Work }}</div>
        <div class = "underline"></div>
      </div>

      <table>
          <tr v-for=" number in 4" :key = "number.id" class = "hello">
              <td>{{ number }}: </td>
              <td>title</td>
              <td class = "functionButtons">
                  <div class = "modify">수정</div>
                  <div class = "delete">삭제</div>
              </td>
          </tr>          
      </table>
  </div>
</template>

<script>
export default {
  name: 'MyTemplate'
}
</script>

<style scoped>
  .title{
        margin: 15px 15px 15px 15px;
    }

    .underline{
        margin: auto;
        width: 98%;
        height: 1px;
        background-color: black;
    }

    table{
        margin-left: 20px;
        width: 90%;
        border-spacing: 10px 10px;
    }

    .functionButtons{
        float: right;
        /* display: inline-block; */
    }

    .modify{
        float: left;
        border: 1px solid black;
        margin-right: 5px;
        font-size: 13px;
    }
    .delete{
        float: left;
        border: 1px solid black;
        font-size: 13px;
    }
    
</style>

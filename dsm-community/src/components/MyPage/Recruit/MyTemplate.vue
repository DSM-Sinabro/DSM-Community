<template>
  <div>
      <div class = "title">
        <div class = "project_text">{{ category }}</div>
        <div class = "underline"></div>
      </div>

      <table>
          <tr class = "list" v-for=" number in 5" :key = "number.id">
              <td><span>{{ number }}.</span></td>
              <td v-on:click="getContent">title</td>
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
  name: 'MyTemplate',
  props: ['category'],
  methods: {
    getContent: function () {
      console.log('helloworld')
    }
  }
}
</script>

<style scoped>
    .title{
        margin: 20px 20px 15px 15px;
    }
    .project_text{
        font-weight: bold;
        display: inline-block;
    }

    .underline{
        margin: auto;
        width: 98%;
        height: 1px;
        margin-top: 7px;
        background-color:#F69523;
        margin-right: 10px;
    }

    table{
        width: 96%;
        border-spacing: 10px 10px;
    }

    .functionButtons{
        float: right;
        /* display: inline-block; */
    }

    .list:hover .modify {
        visibility: visible;
    }
    .modify{
        float: left;
        /* border: 1px solid black; */
        margin-right: 5px;
        font-size: 13px;
        border-radius: 4px;
        visibility: hidden;
    }
    .delete{
        float: left;
        /* border: 1px solid black; */
        font-size: 13px;
        border-radius: 4px;
    }

    td{
        display: inline-block;
        margin-left: 7px;
    }
    
</style>

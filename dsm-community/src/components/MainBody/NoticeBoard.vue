<template>
  <div id = "notice_board">
   <table id="table-title">
     <tr>
       <th class="t-title">공지사항</th>
       <th class="t-title">동아리</th>
       <th class="t-title">스터디</th>
       <th class="t-title">프로젝트</th>
       <th id="add"><span>+더보기</span></th>
     </tr>
   </table>
   <table id="table-post">
     <post-list v-for="post in posts" :post="post" :key="post.id"/>
   </table>
  </div>
</template>

<script>
import PostList from './PostList'

export default {
  name: 'NoticeBoard',
  components: {
    PostList
  },
  data: function () {
    return {
      posts: [
        {title: 'hello', author: 'geon', date: '2017/12/20', view: 244},
        {title: 'hello', author: 'haebin', date: '2017/12/20', view: 244},
        {title: 'hello', author: 'gun', date: '2017/12/20', view: 244},
        {title: 'hello', author: 'haebeen', date: '2017/12/20', view: 244},
        {title: 'hello', author: 'haebeen', date: '2017/12/20', view: 244},
        {title: 'hello', author: 'haebeen', date: '2017/12/20', view: 244}
      ]
    }
  }
}
</script>

<style scoped>

  tr {
    color:#FABC87;
    padding-top: 100px;
    font-size: 1.3rem;
  }
  #notice_board{
    float: left;
    width : 550px;
    padding-left: 40px;
  }

  .t-title {
    width: 15%;
    padding: 20px;
    cursor: pointer;
  }

  #add {
    color:#C3C3C3;
    font-size: .9rem;
    width: 40%;
    text-align: right;
  }

  #add > span {
    cursor: pointer;
    padding-right: 15px;
  }

  #table-title {
    border: 1px solid #EAEAEA; 
    margin-top: 0;
<<<<<<< HEAD
    font-family: "Nanum Gothic", sans-serif;
    width: 400px;
    float: left;
=======
    width: 100%;
    margin-left: 4%;
>>>>>>> 780b57c802d1518a0277b982ac3ba94eb453cc74
  }

  div {
    display: inline-block;
  }

  #table-post{
    margin-left: 4%;
    width: 100%;
  }
</style>

<template>
  <div>
   <table id="table-title">
     <tr>
       <th class="t-title">공지사항</th>
       <th class="t-title">동아리</th>
       <th class="t-title">스터디</th>
       <th class="t-title">프로젝트</th>
       <th id="add">더보기</th>
     </tr>
   </table>
   <table>
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

  .t-title {
    width: 15%;
    padding: 20px;
  }

  #add {
    color:#C3C3C3;
    font-size: .6rem;
    width: 40%;
    text-align: right;
  }

  #table-title {
    border: 1px #EAEAEA; 
    border-spacing: 0;
    margin-top: 0;
    font-family: "Nanum Gothic", sans-serif;
    width: 400px;
    float: left;
  }

  div {
    display: inline-block;
  }
</style>

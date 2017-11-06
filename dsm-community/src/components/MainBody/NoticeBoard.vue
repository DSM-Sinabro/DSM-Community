<<template>
  <table id="board-table">
    <thead>
      <tr id="thead">
        <th>공지사항</th>
        <th>동아리</th>
        <th>스터디</th>
        <th>프로젝트</th>
        <th id="add">더보기</th>
      </tr>
      </thead>
      <tbody>
        <post-list v-for="post in posts" :post="post" :key="post.id"/>
      </tbody>
    </table>
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

  th {
    color:#FABC87;
    cursor: pointer;
    padding: 2px;
    font-weight: bold;
    font-size: 1.3rem;
    width: 15%;
    border-bottom: 1px solid #D5D5D5;
  }

  #add {
    color:#C3C3C3;
    font-size: 0.7rem;
    width: 40%;
    text-align: right;
  }

  #board-table {
    border: 1px #ffffff; 
    border-spacing: 0;
    box-shadow: 3px 3px 15px #A7A7A7;
    margin-top: 0;
    font-family: "Nanum Gothic", sans-serif;
    width: 45%;
    margin-left: 3%;
    display: inline-block;
  }

</style>

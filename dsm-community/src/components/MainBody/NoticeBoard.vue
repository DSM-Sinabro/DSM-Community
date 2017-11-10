<template>
  <div id = "notice_board">
   <table id="table-title">
     <tr>
       <th class="t-title" @click="isSelected = 1" :class="{ selected : isSelected == 1 }">공지사항</th>
       <th class="t-title" @click="isSelected = 2" :class="{ selected : isSelected == 2 }">동아리</th>
       <th class="t-title" @click="isSelected = 3" :class="{ selected : isSelected == 3 }">스터디</th>
       <th class="t-title" @click="isSelected = 4" :class="{ selected : isSelected == 4 }">프로젝트</th>
       <th id="add"><span><icon id="plus" name="plus"></icon> 더보기</span></th>
     </tr>
   </table>
   <table id="table-post" cellspacing="0">
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
      ],
      isSelected: 1
    }
  },
  methods: {
  }
}
</script>

<style scoped>

tr {
  color:#FABC87;
  padding-top: 100px;
  font-size: 1.1em;
}

#notice_board{
  width : 700px;
  box-shadow: 4px 3px 8px #D7D7D7;
}

.t-title {
  width: 17%;
  padding: 20px;
  cursor: pointer;
}

#add {
  color:#C3C3C3;
  font-size: .9rem;
  width: 32%;
  text-align: right;
}

  #add > span {
    cursor: pointer;
    padding-right: 15px;
  }

  #table-title {
<<<<<<< HEAD
    border: 1px solid #EAEAEA; 
  /* margin-top: 0; */
    width: 100%;
    /* margin-left: 4%; */
=======
    border: 1px solid #F6F6F6; 
    margin-top: 0;
    width: 100%;
>>>>>>> 19458d00a17b2c793ec6eff8f221f4bfa8b91645
  }

  div {
    display: inline-block;
  }

  #table-post{
    width: 100%;
    border: 1px solid #EAEAEA;
  }

  .selected {
    color: orange;
    border-bottom: 3px solid #FFCA6C;
  }

  #plus{
    vertical-align: bottom;
  }
</style>

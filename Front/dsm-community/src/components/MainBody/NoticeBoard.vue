<template>
  <div id = "notice-board"> <!-- id에 _말고 -로 사용-->
   <nav id="table-title">
     <ul id="head">
       <li class="t-title" @click="isSelected = 1" :class="{ selected : isSelected == 1 }">공지사항</li>
       <li class="t-title" @click="isSelected = 2" :class="{ selected : isSelected == 2 }">동아리</li>
       <li class="t-title" @click="isSelected = 3" :class="{ selected : isSelected == 3 }">스터디</li>
       <li class="t-title" @click="isSelected = 4" :class="{ selected : isSelected == 4 }">프로젝트</li>
       <li id="more" @click="more"><icon id="ic-plus" name="plus"></icon> 더보기</li>
     </ul><!--rem->px-->
   </nav>
   <nav id="table-post" cellspacing="0">
     <post-list v-for="post in posts" :post="post" :key="post.id"/>
   </nav>
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
    loadPost: function () {

    },
    more: function () {
      if (this.isSelected === 1) {
        this.$router.push({name: 'Post', params: {category: 'notice'}})
      } else if (this.isSelected === 2) {
        this.$router.push({name: 'Post', params: {category: 'club'}})
      } else if (this.isSelected === 3) {
        this.$router.push({name: 'Post', params: {category: 'study'}})
      } else if (this.isSelected === 4) {
        this.$router.push({name: 'Post', params: {category: 'project'}})
      }
    }
  }
}
</script>

<style scoped>

li {
  display: inline-block;
  cursor: pointer;
}

#notice-board {
  box-shadow: 4px 3px 8px #D7D7D7;
  width: 100%;
}

#head {
  list-style-type: none;
  width: 100%;
  display: table;
  table-layout: fixed;
  color:#FABC87;
  font-size: 17px;
  font-weight: bold;
}

.t-title {
  width: 20%;
  padding: 20px;
  cursor: pointer;
  text-align: center;
}


#more {
  color:#C3C3C3;
  font-size: 13px;
  width: 80px;
  text-align: right;
  margin-left: 10px;

}

#table-title {
  border: 1px solid #F6F6F6; 
  margin-top: 0;
  width: 100%;
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

#ic-plus{
  vertical-align: -4px;
}
</style>
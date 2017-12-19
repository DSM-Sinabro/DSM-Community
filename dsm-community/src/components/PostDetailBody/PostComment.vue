<template>
<div>
  <div class = "box">
      <div class = "comment-box">
          <!-- <div class = "comment-user-image"></div> -->
          <div class = "comment-inner">
            <div class = "comment-content">
                <textarea placeholder="댓글을 입력해주세요.." wrap="on" class = "comment" @keydown="enterkey" v-model="content"></textarea>
            </div>
            <button class = "comment-submit" @click="commentsend"><img class = "comment-submit-icon" src = "../../assets/paper-plane.png"/>send</button>
          </div>
      </div>
  </div>
    <post-comment-view/>
    <post-comment-view/>
    <post-comment-view/>

</div>
</template>

<script>
import PostCommentView from './PostCommentView'
export default {
  name: 'PostComment',
  methods: {
    enterkey: function (event) {
      if (event.key === 'Enter') {
        if (!event.shiftKey) {
          event.preventDefault()
          if (this.content !== '') {
            this.commentsend()
          }
        }
      }
    },
    commentsend: function () {
      let vueThis = this
      this.$http.post('/comment', JSON.stringify({
        contents: vueThis.content,
        to: vueThis.to,
        category: vueThis.category
      }), {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        window.location.reload()
      }).catch(function (error) {
        console.log(error)
        alert('댓글을 작성할 수 없습니다')
        vueThis.content = ''
      })
    }
  },
  data: function () {
    return {
      content: ''
    }
  },
  components: {
    PostCommentView
  }
}
</script>

<style scoped>
@import url(https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css);

  *  {
    font-family: 'NanumSquare', sans-serif; 
  }

    .box {
        margin-top: 60px;
        display: flex;
        height: 130px;
        justify-content: center;
        align-items: center;
        /* border: 1px solid black; */
        margin-bottom: 20px;
    }

    .comment-inner {
        display: flex;

    }

    .comment-box {
        display: flex;
        width: 780px;
        height: 130px;
        align-items: center;
        justify-content: center;
        border: 3px solid orange;
        border-radius: 20px;
    }

    .comment-user-image {
        width: 50px;
        height: 50px;
        border: 1px solid black;
        border-radius: 100%;
        margin: 0 20px 0 20px;
    }

    .comment-content {
        width: 650px;
        height: 100px;
        border: 1px solid orange;
        border-radius: 10px;
        margin-right: 15px;
    }

    .comment {
        margin-left: 2%;
        margin-top: 10px;
        width: 95%;
        height: 80px;
        resize: none;
        font-size: 13px;
        
    }

    .comment-submit {
        width: 70px;
        height: 100px;
        /* border: 1px solid black; */
        border-radius: 10px;
        cursor: pointer;
        background-color: orange;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 13px;
        
    }

    .comment-submit-icon {
        width: 25px;
    }
</style>

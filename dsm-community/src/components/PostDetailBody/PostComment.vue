<template>
<div>
  <div class = "box">
      <div class = "comment-box">
          <!-- <div class = "comment-user-image"></div> -->
          <div class = "comment-inner">
            <div class = "comment-content">
                <textarea placeholder="댓글을 입력해주세요.." wrap="on" class = "comment" ></textarea>
            </div>
            <button class = "comment-submit">Submit</button>
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
        border: 1px solid black;
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
        border: 1px solid black;
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
        border: 1px solid black;
        border-radius: 10px;
        cursor: pointer;
    }
</style>

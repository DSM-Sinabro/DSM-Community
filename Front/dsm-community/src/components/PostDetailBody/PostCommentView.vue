<template>
  <div>
      <div class = "comment-list">
          <div class = "comment-box">
              <div class = "author-info">
                  <div class = "author-image"></div>
                  <div class = "author-name">author</div>
              </div>
                <div class = "comment-contents">토레타를 뽑으면 오라떼가 나오지</div>
              <div class = "comment-setting">
                  <div class = "comment-delete">삭제</div>
                  <div class = "comment-modify">수정</div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'PostCommentView'
}
</script>
<style scoped>
    .comment-list {
        width: 780px;
        /* height: 50px; */
        margin: auto;
    }

    .comment-box {
        width: 780px;
        /* height: 100px; */
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #e5e5e5;
        border-left: none;
        border-right: none;
        border-top: none;
    }
    .comment-box:hover .comment-delete{
        visibility: visible;
    }

    .comment-box:hover .comment-modify {
        visibility: visible;
    }

    .author-info {
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: auto;
    }

    .author-image {
        width: 50px;
        height: 50px;
        border: 1px solid orange;
        border-radius: 50%;
        margin-bottom: 8px;
    }

    .author-name {
        font-size: 12px;
    }

    .comment-contents {
        width: 700px;
        display: inline-block;
        font-size: 13px;

    }
    .published-date {
        background-color: red;
        display: inline-block;
    }
    
    .comment-setting {
        width: 100px;
        height: 100px;
        /* border: 1px solid black; */
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .comment-delete {
        font-size: 12px;
        color: skyblue;
        visibility: hidden;
        cursor: pointer;
    }
    
    .comment-modify {
        font-size: 12px;
        color: skyblue;
        visibility: hidden;
        cursor: pointer;
        margin-left: 5px;
    }


</style>

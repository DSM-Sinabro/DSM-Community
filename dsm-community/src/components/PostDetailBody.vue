<template>
    <div>
        <top-bar />
        <div>
            <div id = "detail_box">
              <div class = "top_bar">
                <button class = "back_to_list">
                  글 목록
                </button>
              </div>
              <div class = "title_box">
                <div class = "title_zone">
                  <div class = "title_text">글글글을 써봅시다</div>
                    <div class = "author_zone">
                      <div class = "author_image"></div>
                    <div class = "author_name">guest</div>
                    </div>
                </div>
          
                <div class = "post_info">
                  <div class = "post_date">2017.12.15 13:07</div>
                </div>
                <div class = "hash_tag">
                  <div class = "tag_zone">
                    <div class = "tag" v-for="tag in tags" :key="tag.id">
                      <div class = "tag_title">{{ tag.title }}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class = "main_content">
                <div class = "content">
                  What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.



                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import TopBar from './TopBar'
export default {
  name: 'PostDetailBody',
  data: function () {
    return {
      tags: [
        {title: '#나눔스퀘어?'},
        {title: '#tags tags'},
        {title: '#hash tag!'}
      ]
    }
  },
  components: {
    TopBar
  }
}
</script>

<style scoped>
@import url(https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css);

  *  {
    font-family: 'NanumSquare', sans-serif; 
  }

  #detail_box {
    width: 730px;
    /* height: 700px; */
    border-bottom: 1px solid #e5e5e5;
    border-top: none;
    margin: auto;
    margin-top:4%;
  }

  .title_zone {
    width: 100%;
    height: 60px;
    display: inline-block;
  }

  .title_text {
    display: inline-block;
    font-size: 50px;
    margin-left: 10px;

  }

  .title_box {
    border: 1px solid #e5e5e5;
    border-left: none;
    border-right: none;
    padding-top: 17px;
    padding-bottom: 13px;
  }
/* 
  .author {
    display: inline-block;
    margin-left: 10px;
    font-size: 15px;
  } */

  .post_date {
    display: inline-block;
    margin-left: 10px;
    font-size: 13px;
    color: gray;
  }

  .main_content {
    /* background-color: red; */
    /* height: 1000px; */
    margin-bottom: 100px;
    margin-top: 14px;
  }

  .hash_tag {
    height: 45px;
    width: 730px;
    /* border: 1px solid blue; */
    display: table-cell;
    vertical-align: middle;
  }

  .tag {
    padding-left: 12px;
    padding-right: 12px;
    height: 30px;
    border: 2px solid orange;
    margin-left: 13px;
    display: inline-block;
    vertical-align: middle;
    line-height: 29px;
    border-radius: 5px;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    color: orange;
    transition-duration: 0.2s;

  }

  .tag:hover {
    background-color: orange;
    color: white;
    transition-duration: 0.2s;
    
  }

  .tag_title {
    display: table-cell;
  }

  .author_zone {
    width: 10%;
    float: right;
    margin-right: 10px;
  }

  .author_image {
    width: 50px;
    height: 50px;
    margin: auto;
    border-radius: 100%;
    background-color: gray;
  }

  .author_name {
    width: auto;
    margin: auto;
    text-align: center;
    font-size: 12px;
  }

  .post_info {
    margin: 5px 0 0px 8px;
    display: inline-block;
  }

  .content {
    display: inline;
  }

  .top_bar{
    width : 100%;
    height: 30px;
    display: inline-block;
    display: table;
    margin-bottom: 10px;
  }

  .back_to_list {
    width: 60px;
    height: 30px;
    border-radius: 10px;
    background-color:orange;
    cursor: pointer;
    float: right;
    font-size: 11px;
    color: white;
    display: table-cell;
  }
  .back_to_list:hover{
    transform:scale(1.05);
  }


  

</style>

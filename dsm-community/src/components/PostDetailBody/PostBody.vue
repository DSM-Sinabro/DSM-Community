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
                  <div class = "post_date">2017.12.15 13:07 작성</div>
                  <div class = "views">조회 : 3</div>
                </div>
                <div class = "hash_tag">
                  <div class = "tag_zone">
                    <hash-tag :tags="tags"/>
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
Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import TopBar from '../TopBar'
import HashTag from '../HashTag'
export default {
  name: 'PostDetailBody',
  data: function () {
    return {
      tags: [
        {title: '나눔스퀘어?'},
        {title: 'tags tags'},
        {title: 'hash tag!'}
      ]
    }
  },
  components: {
    TopBar,
    HashTag
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
    margin-bottom: 20px;
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
    font-weight: bold;

  }

  .title_box {
    border: 1px solid #e5e5e5;
    border-left: none;
    border-right: none;
    padding-top: 17px;
    padding-bottom: 13px;
  }

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
  .views {
    display: inline-block;
    font-size: 13px;
    color: gray;
    margin-left: 20px;
  }

  

</style>

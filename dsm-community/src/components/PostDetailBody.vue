<template>
    <div>
        <top-bar />
        <div>
            <div id = "detail_box">
              <div class = "title_box">
                <div class = "title_zone">
                  <div class = "title_text">Helloworld</div>
                </div>
                <div class = "under_line"></div>
                <div>
                  <div class = "author">author</div>
                  <div class = "post_date">2015:15:24</div>
                </div>
                <div class = "hash_tag">
                  <div class = "tag_zone">
                    <div class = "tag" v-for="tag in tags" :key="tag.id">
                      <span class = "tag_title">{{ tag.title }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class = "main_content">
                here is main_content
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
        {title: 'tags'},
        {title: 'tags tags'}
      ]
    }
  },
  components: {
    TopBar
  }
}
</script>

<style scoped>
  #detail_box {
    width: 730px;
    height: 700px;
    border: 0.4px solid gray; 
    margin: auto;
    margin-top: 4%;
  }

  .title_zone {
    width: 100%;
    height: 60px;
    background-color: red;
    display: block;
  }

  .title_text {
    display: inline-block;
    background-color: blue;
    font-size: 50px;
    margin-left: 10px;

  }

  .title_box {
    border: 1px solid black;
  }

  .author {
    display: inline-block;
    margin-left: 10px;
  }

  .post_date {
    display: inline-block;
    margin-left: 10px;
  }

  .main_content {
    background-color: red;
  }

  .hash_tag {
    height: 45px;
    width: 730px;
    border: 1px solid blue;
    display: table-cell;
    vertical-align: middle;
  }

  .tag {
    padding-left: 10px;
    padding-right: 10px;
    height: 30px;
    border: 1px solid black;
    margin-left: 10px;
    /* display: inline-block; */
    vertical-align: middle;
    display: table-cell;
  }

  .tag_title {
    margin: auto;
    display: inline-block;
  }

  .tag_zone {
    display: inline-block;
    margin-left: 10px;
  }
</style>

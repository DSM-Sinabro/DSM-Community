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
                  <div class = "author">시발년</div>
                  <div class = "post_date">2015:15:245</div>
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

  }
</style>

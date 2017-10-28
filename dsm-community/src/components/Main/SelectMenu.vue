<template>
    <div id = "select_menu">
        <a class = "menu" v-for="item in items" :key="item.id">
          {{ item.menu }}
        </a>
    </div>
</template>

<script>
export default {
  name: 'SelectMenu',
  data: function () {
    return {
      items: [
            { menu: '자유게시판' },
            { menu: '공지사항' },
            { menu: '스터디' },
            { menu: '프로젝트' },
            { menu: '동아리' },
            { menu: '대회정보' }
      ]
    }
  }
}
</script>

<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);

#select_menu{
  float: right;
  margin-right: 40px;
  /* vertical-align: middle; */
}

.menu{
  padding-top: 0;
  cursor: pointer;
  font-weight: bold;
  font-family: "Nanum Gothic", sans-serif;
  color: orange;
  padding: 15px;
  font-size: 14px;
  /* vertical-align: text-bottom; */
  /* display: inline-block; */
  /* vertical-align: middle; */
}

</style>



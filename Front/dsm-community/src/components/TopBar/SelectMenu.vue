<template>
    <div id = "select_menu">
        <!-- <a class = "menu" v-for="item in items" :key="item.id">
          {{ item.menu }}
        </a> -->
        <router-link class="menu" v-for="item in items" :key="item.id" :to = "item.link" >
          {{ item.menu }}
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'SelectMenu',
  data: function () {
    return {
      items: [
            { menu: '자유게시판', link: '/post/freeboard' },
            { menu: '공지사항', link: '/post/notice' },
            { menu: '스터디', link: '/post/study' },
            { menu: '프로젝트', link: '/post/project' },
            { menu: '동아리', link: '/post/club' },
            { menu: '대회정보', link: '/post/contest' }
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
  padding-top: 21px;
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
  text-decoration: none;
  /* vertical-align: text-bottom; */
  /* display: inline-block; */
  /* vertical-align: middle; */
}

.menu:hover {
  color: #FF7800;
}

</style>



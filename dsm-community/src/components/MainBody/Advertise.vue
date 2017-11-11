<template>
  <div id = "advertise">
      <div class="dsm">dsm</div>
      <div class = "dms">
          <img src = "../../assets/DMS_logo.png" class = "logo"/>
          <div class = "dmsText">교내 기숙사 시스템</div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'Advertise'
}
</script>
<style scoped>
    .dsm{
        width : 175px;
        height : 65px;
        border: 1px solid black;
        float: left;
        margin-right: 13px;
    }
    .dms{
        width : 175px;
        height : 65px;
        /* border: 1px solid black; */
        float: left;
        display: table-cell;
        vertical-align: middle;
          box-shadow: 2px 2px 2px #E7E8EA;

    }
    #advertise{
        width: 366px;
        /* height: 65px; */
        float: right;
        /* border: 1px solid black; */
        margin-right: 55px;
        margin-top: 20px;
    }

    .logo{
        /* max-width: 100%; */
        /* max-height: 100%; */
        width: 63px;
        max-height: 100%;
        float: left;
    }

    .dmsText{
        font-size: 12px;
        top: 0;
        display: table;        
        margin-top: 25px;
        /* margin-left: 10px; */
        padding-left: 5px;
        /* margin-top: 10px; */
        font-weight: bold;
        /* display: table; */
        color: #D5D5D5;
        font-family: "Nanum Gothic", sans-serif; 
    }
</style>


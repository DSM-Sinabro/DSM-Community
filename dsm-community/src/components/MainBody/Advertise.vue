<template>
  <div id = "ad">
      <div class = "ad-dsm-box">
          <div class = "ad-dsm-logo"></div>
          <div class = "ad-dsm-name">
              <span>DSM<br/>Homepage</span>
          </div>
      </div>
      <div class = "ad-dms-box">
          <div class = "ad-dms-logo">
              <img class = "ad-dms-logo-image" src="../../assets/DMS_logo.png"/>
          </div>
          <div class = "ad-dms-name">
              <span>Dormitory<br/>Management<br/>System</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Advertise'
}
</script>

<style scoped>
    #ad {
        width: 370px;
        height: 80px;
        /* border: 1px solid black; */
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ad-dsm-box {
        width: 180px;
        height: 80px;
        border: 1px solid #e5e5e5;
        margin: auto;
        display: flex;
        align-items: center;
        box-shadow: 2px 2px #e5e5e5;

    }

    .ad-dsm-logo {
        width: 80px;
        height: 80px;
        /* border: 1px solid black; */
        display: inline-block;
    }

    .ad-dsm-name {
        width: 100px;
        height: 80px;
        /* border: 1px solid black; */
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 13px;
    }

    .ad-dms-box {
        width: 180px;
        height: 80px;
        border: 2px solid #e5e5e5;
        margin: auto;
        display: flex;
        align-items: center;
        box-shadow: 2px 2px #e5e5e5;
    }

    .ad-dms-logo {
        width: 80px;
        height: 80px;
        /* border: 1px solid black; */
        display: inline-block;
    }

    .ad-dms-name {
        width: 100px;
        height: 80px;
        /* border: 1px solid black; */
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 13px;
    }

    .ad-dms-logo-image {
        width: 100%;
    }




</style>


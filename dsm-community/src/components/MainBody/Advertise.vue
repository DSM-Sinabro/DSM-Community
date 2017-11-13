<template>
  <div id = "advertise">
      <div class="ad">
        <div class="logo"></div>
        <div class="ad-text">

        </div>
      </div>
      <div class = "ad">
        <div class="logo" id="dms-logo"></div>
        <div class="ad-text">
          교내 기숙사 시스템
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
.ad {
    width : 50%;
    height : 65px;
    display: inline-block;
    cursor: pointer;
    /* box-shadow: 2px 2px 2px #E7E8EA; */
}

#advertise {
    width: 100%;
    white-space: nowrap;
}

.logo {
    height: 65px;
    width: 35%;
    display: inline-block;
}

.ad-text {
    height: 65px;
    width: 65%;
    vertical-align: top;
    display: inline-block;
}

#dms-logo {
    background-image: url('../../assets/DMS_logo.png');
    background-repeat: no-repeat;
    background-size: cover;
}

</style>


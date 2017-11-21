<template>
    <div id="footer-bar">
        <a href="https://www.facebook.com/DSMSinabro/" target="blank"><icon name="facebook-official"></icon> Facebook</a>
        <a href="https://github.com/DSM-Sinabro/DSM-Community" target="blank"><icon name="github"></icon> GitHub</a>
        <span><icon name="bug"></icon> 버그신고</span>
        <span>Develop by 시나브로</span> <!--span 태그 -->
    </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
#footer-bar {
    min-width: 100%;
    background-color: #E3E3E3;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 5.5vh;
    text-align: right;
    line-height: 5.5vh;
    padding-right: 7%;
    font-size: 1rem;
}

svg {
    vertical-align: -0.19vh;
    text-align: center;
}
span {
    margin-left: 1%;
    cursor: pointer;
}

a {
    text-decoration:none;
    color: #000000;
    margin-left: 1%;
    cursor: pointer;
}
</style>


<<template>
    <div id="footer-bar">
        <span><a href="https://www.facebook.com/DSMSinabro/" target="blank"><icon name="facebook-official"></icon> Facebook</a></span>
        <span><a href="https://github.com/DSM-Sinabro/DSM-Community" target="blank"><icon name="github"></icon> GitHub</a></span>
        <span><icon name="bug"></icon> 버그신고</span>
        <span>Develop by 시나브로</span>
    </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
#footer-bar{
    background-color: #E3E3E3;
    width: 100%;
    height: 5.5vh;
    position: absolute;
    bottom: 0;
    text-align: right;
    line-height: 5.5vh;
    padding-right: 7%;
    font-size: 1rem;
}
svg{
    vertical-align: -0.19vh;
    text-align: center;
}
span{
    margin-left: 1%;
    cursor: pointer;
}

a{
    text-decoration:none;
    color: #000000;
}
</style>


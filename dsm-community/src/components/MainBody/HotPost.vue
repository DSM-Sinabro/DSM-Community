<<template>
  <div>
    <span id="hot-post">최근 핫한 소식</span>
    <span id="post">김건 죽었다</span>
    
  </div>
</template>

<script>
export default {
  name: 'HotPost'
}
</script>

<style scoped>
div{
  box-shadow: 5px 3px 10px #E1E1E1;
  border: 1px solid #EAEAEA;
  width : 700px;
  margin-left: 364px;
  margin-bottom: 40px;
  height: 45px;
}

#hot-post{
  display: inline-block;
  width: 200px;
  background-color: #FDAE4F;
  height: 43.4px;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  line-height: 2.6;
}

#post{
  display: inline-block;
  color: #767676;
  font-weight: bold;
  width: 490px;
  height: 43.4px;
  line-height: 2.6;
  cursor: pointer;
}
</style>


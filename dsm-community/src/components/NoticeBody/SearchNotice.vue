<template>
    <div id="outbox">
        <h1 id="title">공지사항</h1>
        <div id="outsearch_box">
            <div id="search_box">
                <icon name="search" id="search"></icon>
                <input type="text" id="search_input">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SearchNotice'
}
</script>

<style>
    #outbox{
        width: 45%;
        height: 70px;
        margin-top: 50px;
        margin-left: 27.5%;
    }
    #title{
        color: orange;
        float: left;
    }
    #outsearch_box{
        width: 81%;
        height: 100%;
        padding-left: 35%;
        padding-top: 2%;
    }
    #search_box{
        width: 75%;
        height: 55%;
        margin-left: 65%;
        border: 2px solid orange;
    }
    #search_input{
        color: #000000;
        width: 90%;
        background-color: rgba(255, 255, 255, 0);
    }
    #search{
        color: orange;
        padding-left: 1.5%;
        width: 18px;
        height: 18px; 
        padding-top: 2%; 
    }
</style>
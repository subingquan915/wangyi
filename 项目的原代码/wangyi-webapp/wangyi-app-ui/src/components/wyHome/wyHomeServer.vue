<!--  -->
<template>
  <div class="server">
        <div class="s1">
            <img src="img/s1.png" alt="">
            <span>网易自营品牌</span>
        </div>
        <div class="s1">
            <img src="img/s1.png" alt="">
            <span>30天无忧退换货</span>
        </div>
        <div class="s1">
            <img src="img/s1.png" alt="">
            <span>48小时快速退款</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"wyHomeServer",
}

</script>
<style>
/* server */
.server{
    display: flex;
    height: 0.32rem;
    /* background: red; */
    align-items: center;
    margin-left:0.16rem;
    margin-bottom: 0.09rem;
}
.s1{
    display: flex;
    flex:1;
    align-items: center;
}
.s1 img{
    width: 0.14rem;
    height: 0.14rem;
}
.s1 span{
    color:#914551;
    font-size: 0.09rem;
    
}
</style>
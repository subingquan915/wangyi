<!--  -->
<template>
  <div class="header">
        <div class="header-left">
            <a href=""><img :src="data.headerImg1" alt=""><span>扫一扫</span></a> 
        </div>
        <div class="header-middle">
            <a href="">
                <img src="/static/img/h2.png" alt="">
                <span>请输入商品详情</span>
            </a>
        </div>
        <div class="header-right">
            <a href=""><img src="/static/img/h3.png" alt=""><span>消息</span></a>
        </div>
    </div>
</template>

<script>
export default {
  name: "wyHomeHeader",
  props:["data"],
}

</script>
<style>
.header{
    /* width: 100%; */
    height: .34rem;
    /* background:red; */
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding-left: 0.09rem;
    padding-right: 0.13rem;
}
.header-left{
    height: 100%;
    /* width: 0.3rem; */
}
.header-left a{
    /* display: block; */
    text-align:center;
    width: 0.3rem;
}
.header-left a img{
    width:.19rem;
    height:.19rem;
}
.header-left a span{
    color: #838383;
    font-size:10px;
    display: block;
}
.header-middle{
 
    height: 100%;
    width: 2.69rem;
    background:#ededed;
    border-radius: 0.04rem;
}
.header-middle a{
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
}
.header-middle a img{
    width:.15rem;
    height:.15rem;
}
.header-middle a span{
    color: #868686;
    font-size:.09rem;
    display:block;
    line-height: 0.09rem;
}

.header-right a img{
    width:.19rem;
    height:.19rem;
}
.header-right a span{
    color: #838383;
    font-size:0.09rem;
    display: block;
}
</style>
<!--  -->
<template>
  <section>


        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="/static/img/xinpin1.png" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="/static/img/img2.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="/static/img/img3.jpg" alt="">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
            
            <!-- 如果需要导航按钮 -->
            <!-- <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div> -->
            
            <!-- 如果需要滚动条 -->
            <!-- <div class="swiper-scrollbar"></div> -->
        </div>


        <div class="tuijian">
            <P class="p1">推荐新品</P>
            <div class="tuijian-bottom">
                <img class="imgs" src="/static/img/xinpin2.png" alt="">
                <div class="bt-right">
                    <h3 class="h1" >洗脱一体不脏手懒人拖把</h3>
                    <h3 class="h2" >￥134.8</h3>
                    <h3 class="h3">“免费洗，解放双手新“净”界”</h3>
                </div>
            </div>
        </div>


        <div class="part">
            <img class="imgpart" src="/static/img/xinpin3.png" alt="">
            <p class="dec" >
               网易智造低压海盐热敷...
                <span class="stwo">￥199</span>
            </p>
            <div class="part-bottom">
                <p>“古法热敷，古法热敷”</p>
            </div>
        </div>
        <div class="part">
            <img class="imgpart" src="/static/img/xinpin3.png" alt="">
            <p class="dec" >
               网易智造低压海盐热敷...
                <span class="stwo">￥199</span>
            </p>
            <div class="part-bottom">
                <p>“古法热敷，古法热敷”</p>
            </div>
        </div>
        <div class="part">
            <img class="imgpart" src="/static/img/xinpin3.png" alt="">
            <p class="dec" >
               网易智造低压海盐热敷...
                <span class="stwo">￥199</span>
            </p>
            <div class="part-bottom">
                <p>“古法热敷，古法热敷”</p>
            </div>
        </div>
        <div class="part">
            <img class="imgpart" src="/static/img/xinpin3.png" alt="">
            <p class="dec" >
               网易智造低压海盐热敷...
                <span class="stwo">￥199</span>
            </p>
            <div class="part-bottom">
                <p>“古法热敷，古法热敷”</p>
            </div>
        </div>
        <div class="part">
            <img class="imgpart" src="/static/img/xinpin3.png" alt="">
            <p class="dec" >
               网易智造低压海盐热敷...
                <span class="stwo">￥199</span>
            </p>
            <div class="part-bottom">
                <p>“古法热敷，古法热敷”</p>
            </div>
        </div>
        <div class="part">
            <img class="imgpart" src="/static/img/xinpin3.png" alt="">
            <p class="dec" >
               网易智造低压海盐热敷...
                <span class="stwo">￥199</span>
            </p>
            <div class="part-bottom">
                <p>“古法热敷，古法热敷”</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:"xinpinSection"
}

</script>
<style>


/* luobo */

.swiper-container {
    width: 100%;
}

.swiper-slide img{
    width: 100%;
    height: 1.85rem;
    display: block;
}

/* tuijian */

.tuijian{
    /* background: red; */
    margin:0.0.15rem;
}
.p1{
    font-size: 0.15rem;
    color: #333333;
    line-height: 0.5rem;
    text-align: center;
    font-weight: bolder;
}
.tuijian-bottom{
    display: flex;
    background: #f5f5f5;
}
.tuijian-bottom .imgs{
    width: 1.4rem;
    height: 1.4rem;
    margin-right: 0.15rem;
}

.bt-right .h1{
    color: #343434;
    font-size: 0.13rem;
    
}

.bt-right .h2{
    color: #a63533;
    font-size: 0.11rem;
    margin-top: 0.11rem;
    margin-bottom: 0.12rem;
}

.bt-right .h3{
    color: #7f7f7f;
    font-size: 0.11rem;
}

/* section */
section{
    margin:0 0.15rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 0.1rem;
}
.part{
    width: 1.08rem;
    background: #f4f4f4;
    /* text-align: center; */
    /* height: 0.2rem; */
    margin-bottom: 0.1rem;

   
}
.imgpart{
    width:1rem;
    height: 1rem;
    margin: 0 auto;
}
.dec {
    color: #000;
    font-size: 0.12rem;
    line-height: 0.17rem;
    margin:0.19rem 0.09rem 0.1rem;
    border-bottom: 1px solid #d9d9d9;
}

.dec span{
    color: #a63533;
    font-size: 0.12rem;
    line-height: 0.17rem;
}
.part-bottom{
    margin-bottom: 0.1rem;
}
.part-bottom p{
    margin:0 0.09rem;
    color: #808080;
    font-size: 0.11rem;
}
</style>
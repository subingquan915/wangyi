<!--  -->
<template>
  <section>
        <div class="section-left">
            <a href="" class="focus">推荐专区</a>
            <a href="">冬季专区</a>
            <a href="">爆品专区</a>
            <a href="">新品专区</a>
            <a href="">居家生活</a>
            <a href="">服饰鞋包</a>
            <a href="">美食酒水</a>
            <a href="">个护清洁</a>
            <a href="">母婴亲子</a>
            <a href="">运动旅行</a>
            <a href="">数码家电</a>
            <a href="">礼品特色</a>
        </div>
        <div class="section-right">
            <img src="/static/img/fenlei1.jpg" alt="">
            <div class="cateList">
                <a href=""><img src="/static/img/fenlei2.png" alt=""><span>大家都在搜</span></a>
                <a href=""><img src="/static/img/fenlei2.png" alt=""><span>大家都在搜</span></a>
                <a href=""><img src="/static/img/fenlei2.png" alt=""><span>大家都在搜</span></a>
                <a href=""><img src="/static/img/fenlei2.png" alt=""><span>大家都在搜</span></a>
                <a href=""><img src="/static/img/fenlei2.png" alt=""><span>大家都在搜</span></a>
                <a href=""><img src="/static/img/fenlei2.png" alt=""><span>大家都在搜</span></a>
                <a href=""><img src="/static/img/fenlei2.png" alt=""><span>大家都在搜</span></a>
                <a href=""><img src="/static/img/fenlei2.png" alt=""><span>大家都在搜</span></a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:'wyFenleiSection'
}

</script>
<style>

/* section */
section{
    display: flex;
}
.section-left{
    width: 0.81rem;
    height: 100%;
    /* background: red; */
    display: flex;
    flex-direction: column;
    text-align:center;
    border-right: 1px solid #d9d9d9;
}
.section-left .focus{
    color: red;
}
.section-left a{
    color: #333333;
    font-size: 0.13rem;
    line-height: 0.25rem;
    margin-top: 0.2rem;
}
.section-right{
    /* background: red; */
    margin:0.15rem;
    width: 2.64rem;
}
.section-right img{
    width: 2.64rem;
    height: 0.96rem;
}

.cateList{
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
}
.cateList a{
    text-align: center;

    width: 0.73rem;
    /* margin-right:0.22rem; */
}

.cateList a:nth-child(3n+2){
    margin-right:0.22rem;
}

.cateList a:nth-child(3n+1){
    margin-right:0.22rem;
}
.cateList a img{
    width: 0.49rem;
    height: 0.49rem;
    margin:0 auto;
}

.cateList a span{
    color: #333333;
    font-size: 0.12rem;
    display: block;
}

</style>
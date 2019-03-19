<!--  -->
<template>
  <div class="banner">
        <a href=""><img src="../../assets/img/b1.png" alt=""><span>居家生活</span></a>
        <a href=""><img src="../../assets/img/b2.png" alt=""><span>服饰鞋包</span></a>
        <a href=""><img src="../../assets/img/b3.png" alt=""><span>美食酒水</span></a>
        <a href=""><img src="../../assets/img/b4.png" alt=""><span>个人护洁</span></a>
        <a href=""><img src="../../assets/img/b1.png" alt=""><span>限时购</span></a>
        <a href=""><img src="../../assets/img/b1.png" alt=""><span>母婴亲子</span></a>
        <a href=""><img src="../../assets/img/b1.png" alt=""><span>运动旅行</span></a>
        <a href=""><img src="../../assets/img/b1.png" alt=""><span>母婴亲子</span></a>
        <a href=""><img src="../../assets/img/b1.png" alt=""><span>运动旅行</span></a>
        <a href=""><img src="../../assets/img/b1.png" alt=""><span>运动旅行</span></a>
    </div>
</template>

<script>
export default {
     name: "wyHomeBanner",
}

</script>
<style>

/* banner */
.banner{
    display: flex;
    flex-wrap: wrap;
}
.banner a{
    width: 20%;
    text-align: center;
    margin-bottom: 0.15rem;
}
.banner a img{
    width: 0.5rem;
    height: 0.5rem;
    margin:0 auto;
}

.banner a span{
    color:#373737;
    font-size: 0.12rem;
    display: block;
    line-height: 0.12rem;
    margin-top: 0.09rem;
}
</style>
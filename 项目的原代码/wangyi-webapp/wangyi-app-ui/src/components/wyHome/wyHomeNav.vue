<!--  -->
<template>
  <div class="nav">
      <router-link tag="a" to="/zhuye">推荐</router-link>
      <router-link tag="a" to="/xinpin">新品</router-link>
      
    
    <a href="">福利社</a>
    <a href="">限时购</a>
    <a href="">居家生活</a>
    <a href="">鞋包服饰</a>
    <a href="">美食酒水</a>
 </div>
</template>

<script>
export default {
    name: "wyHomeNav",
  }



</script>
<style>

/* nav */

.nav{
    height: 0.35rem;
    display: flex;
    overflow: auto;
    margin-left: 0.12rem;
}
.nav a{
    color: #303030;
    font-size: 0.14rem;
    line-height: 0.35rem;
    margin-right: 0.25rem;
    flex-shrink: 0;
}

.swiper-container {
    width: 100%;
}

.swiper-slide img{
    width: 100%;
    height: 1.85rem;
    display: block;
}
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
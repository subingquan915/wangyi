<!--  -->
<template>
   <div class="footer">
        <router-link tag="a" to="/zhuye">
            <img src="/static/img/f1.png" alt=""><span>首页</span>
        </router-link>
        <router-link tag="a" to="/fenlei">
            <img src="/static/img/f1.png" alt=""><span>分类</span>
        </router-link>
        <router-link tag="a" to="/shiwu">
            <img src="/static/img/f1.png" alt=""><span>识物</span>
        </router-link>
        <router-link tag="a" to="/goodsCart">
            <img src="/static/img/f1.png" alt=""><span>购物车</span>
        </router-link>
        <router-link tag="a" to="/my">
            <img src="/static/img/f1.png" alt=""><span>个人</span>
        </router-link>


       
    </div>
</template>

<script>
export default {
    name: "wyFooter",
}

</script>
<style>
/* footer */
.footer{
    width: 100%;
    height: 0.5rem;
    display: flex;
    border-top: 1px solid #b2b2b2;
    align-items:center;
}
.footer a{
    flex:1;
    text-align: center;
}
.footer a img{
    margin:0 auto;
    width:.2rem;
    height:.2rem;
}
.footer a span{
    color:#854140;
    font-size:0.12rem;
    display: block;
}
</style>
<!--  -->
<template>
 <header>
        <a href="">
            <img src="/static/img/h2.png" alt="">
            <span>搜索商品，共21303款好物</span>
        </a>
    </header>
</template>

<script>
export default {
    name:"wyFenleiHead"
}

</script>
<style>
/* header */


header{
 
    padding:0.08rem 0.15rem;
    border-bottom: 1px solid #d9d9d9;
    
    
}
header a{
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    background:#ededed;
    border-radius: 0.04rem;
}
header a img{
    width:.15rem;
    height:.15rem;
    margin-right: 0.04rem;
}
header a span{
    color: #7f807f;
    font-size:.013rem;
    display:block;
    line-height: 0.32rem;
}
</style>
<!--  -->
<template>
 <!-- header -->
    <header>
        <h3 class="tit">购物车</h3>
        <div class="head">
            <a href="">领券</a>
            <a href="">编辑</a>
            <img src="cartimg/c1.png" alt="">

        </div>
    </header>
    
</template>

<script>
export default {
    name:"goodsCartHeader"
}

</script>
<style>

/* header */
header{
    display: flex;
    justify-content:space-between;
    align-items: center;
    margin: 0 0.15rem;
    height: 0.45rem;
}
.tit{
    color: #3e3e3e;
    font-size: 0.17rem;
}
.head{
    display: flex;
}
.head a:nth-child(1){
    color: red;
    font-size: 0.14rem;
}

.head a:nth-child(2){
    color: #333333;
    font-size: 0.14rem;
    margin: 0 0.13rem;
}
.head img{
    width: 0.18rem;
    height: 0.18rem;
}
</style>
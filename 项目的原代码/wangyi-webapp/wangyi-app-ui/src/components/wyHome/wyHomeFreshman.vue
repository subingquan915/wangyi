<!--  -->
<template>
 <div class="freshman">
        <div class="title">
            <h4>-新人专享礼-</h4>
        </div>
        <div class="fre-bottom">
            <a href=""><img src="../../assets/img/fb1.png" alt=""><span>现金礼</span></a>
            <a href=""><img src="../../assets/img/fb2.png" alt=""><span>￥13.1</span></a>
            <a href=""><img src="../../assets/img/fb3.png" alt=""><span>￥67.4</span></a>
        </div>
    </div>
</template>

<script>
export default {
    name: "wyHomeFreshman",
}

</script>
<style>

/* freshman */
.freshman{
    height: 2.02rem;
    /* background:blue; */
    padding:0 0.15rem 0.1rem 0.15rem;
    border-top: 0.1rem solid #f4f4f4;
    border-bottom: 0.1rem solid #f4f4f4;
}
.title{
    text-align: center;
    /* background:yellow; */
}
.title h4{
    color:#2f2f2f;
    font-size: 0.16rem;
    line-height: 0.5rem;
}
.fre-bottom{
    width: 100%;
    display: flex;
    justify-content: space-between;
    
}

.fre-bottom a {
    width: 1.12rem;
    /* flex:1; */
    text-align: center;
    background: #fefefe;
    padding-bottom: 0.1rem;
}
.fre-bottom a img{
    width: 1.12rem;
    height: 1.12rem;
    /* margin:0 auto; */
}
.fre-bottom a span{
    width: 1.12rem;
    color: #3c3c3c;
    font-size:0.13rem;
    display: block;
    line-height: 0.2rem;
}
</style>
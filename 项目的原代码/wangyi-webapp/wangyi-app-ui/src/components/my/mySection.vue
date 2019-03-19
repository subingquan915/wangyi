<!--  -->
<template>
  <section>


        <div class="dingdan">
            <div class="title">
                <h3>我的订单</h3>
                <img src="/static/myimg/more1.png" alt="">
            </div>
            <div class="nav">
                <a href=""><img src="/static/myimg/my3.png" alt=""><span>代付款</span></a>
                <a href=""><img src="/static/myimg/my3.png" alt=""><span>代发货</span></a>
                <a href=""><img src="/static/myimg/my3.png" alt=""><span>已发货</span></a>
                <a href=""><img src="/static/myimg/my3.png" alt=""><span>待评价</span></a>
                <a href=""><img src="/static/myimg/my3.png" alt=""><span>退换/售后</span></a>
            </div>
            <img class="dimg" :src="value.img1" alt="">
        </div>
        <div class="hehuo">
            <div class="title">
                <h3>网易严选合伙人</h3>
                <img src="/static/myimg/more1.png" alt="">
            </div>
            <img class="himg" :src="value.img2" alt="">
        </div>
        <div class="content">
            <div class="title">
                <h3>我的服务</h3>
            </div>
            <div class="list">
                <a href=""><img src="/static/myimg/my6.png" alt=""><span>拼团订单</span></a>
                <a href=""><img src="/static/myimg/my6.png" alt=""><span>众筹订单</span></a>
                <a href=""><img src="/static/myimg/my6.png" alt=""><span>邀请好友</span></a>
                <a href=""><img src="/static/myimg/my6.png" alt=""><span>优惠券</span></a>
                <a href=""><img src="/static/myimg/my6.png" alt=""><span>红包</span></a>
                <a href=""><img src="/static/myimg/my6.png" alt=""><span>优先购</span></a>
                <a href=""><img src="/static/myimg/my6.png" alt=""><span>礼品卡</span></a>
                <a href=""><img src="/static/myimg/my6.png" alt=""><span>会员俱乐部</span></a>
                <a href=""><img src="/static/myimg/my6.png" alt=""><span>积分中心</span></a>
                <a href=""><img src="/static/myimg/my6.png" alt=""><span>积分中心</span></a>
                <a href=""><img src="/static/myimg/my6.png" alt=""><span>积分中心</span></a>
                <a href=""><img src="/static/myimg/my6.png" alt=""><span>积分中心</span></a>
                <a href=""><img src="/static/myimg/my6.png" alt=""><span>积分中心</span></a>
            </div>
        </div>
        <div class="tuijian">
            <div class="title">
                <h3>为你推荐</h3>
            </div>
        </div>
        
    </section>
</template>

<script>
export default {
    name:"mySection",
    props:["value"]
}

</script>
<style>

/* section */
section{
	margin: 0 0.15rem;

}
.dingdan{
	padding-bottom: 0.12rem;
	border-bottom: 0.13rem solid #f4f4f4;
}	
.title{
	display: flex;
	
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid #d3d3d3;

}
.title h3{
	color: #262626;
	font-size: 0.13rem;
	line-height: 0.51rem;
}
.title img{
	width: 0.07rem;
	height: 0.13rem;
}
.nav{
	display: flex;
	margin-top: 0.12rem;
	margin-bottom: 0.23rem;
}

.nav a {
	flex: 1;
	text-align: center;
}
.nav a img{
	width: 0.23rem;
	height: 0.23rem;
	margin: 0 auto;
}
.nav a span{
	color: #363636;
	font-size: 0.12rem;
	display: block;
	line-height: 0.12rem;
	margin-top: 0.1rem;
}
.dimg{
	width: 3.45rem;
	height: 0.8rem;
	margin: 0 auto;
}

.hehuo{
	padding-bottom: 0.12rem;
	border-bottom: 0.13rem solid #f4f4f4;
}
.himg{
	width: 3.45rem;
	height: 0.76rem;	
	margin-top: 0.12rem;
}



.list {
	display: flex;
	flex-wrap: wrap;

}
.list  a {
	width: 25%;
	text-align: center;
	border-bottom: 1px solid #d3d3d3;
}
.list  a img{
	width: 0.22rem;
	height: 0.22rem;
	margin: 0 auto;
	margin-top: 0.18rem;

}
.list a span{
	color: #181818;
	font-size: 0.12rem;
	display: block;
	line-height: 0.12rem;
	margin-top: 0.1rem;
	margin-bottom: 0.3rem;
	
}
</style>
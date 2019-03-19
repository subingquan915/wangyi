<!--  -->
<template>
<header>
        <img class="imgs" :src="data.touxiang" alt="">
        <div class="yonghu">
            <p>{{data.name}}</p>
            <img src="/static/myimg/my2.png" alt="">
        </div>
    </header>
</template>

<script>
export default {
	name:"myHeader",
	 props:["data"],
}

</script>
<style>

/* header */
header{
	display: flex;
	background: #cbb482;
	height: 1.39rem;
	align-items: center;
}
.imgs{
	width: 0.72rem;
	height: 0.72rem;
	margin-left: 0.15rem;
	margin-right: 0.13rem;
	border-radius: 50%;
}
.yonghu p{
    color:#fcf4e7;
	font-size: 0.13rem;
	margin-bottom: 0.11rem;
}
.yonghu img{
	width: 0.87rem;
	height: 0.22rem;
}
</style>
<!--  -->
<template>
<swiper v-if="value.menuListOption" :options="value.menuListOption" ref="menuListSwiper">
      <swiper-slide v-for="(i,index) in value.bannerImg" :key="index">
          <router-link :to="i.url" tag="img" :src="i.img"></router-link>
      </swiper-slide>
    <!--以下看需要添加-->
    <div class="my-pagination" slot="pagination"></div> 
</swiper>




</template>

<script>
export default {
    name: "wyHomeLunbo",
    props:["value"],
}

</script>
<style>

.swiper-container {
    width: 100%;
}

.swiper-slide img{
    width: 100%;
    height: 1.85rem;
    display: block;
}
</style>
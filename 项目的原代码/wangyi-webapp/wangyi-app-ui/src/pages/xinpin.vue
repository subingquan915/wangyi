<!--  -->
<template>
  <div>
      <wyHomeHeader></wyHomeHeader>
      <wy-home-nav></wy-home-nav>
      <xinpinSection></xinpinSection>
  </div>
</template>

<script>
import wyHomeHeader from "../components/wyHome/wyHomeHeader"
import wyHomeNav from "../components/wyHome/wyHomeNav"
import xinpinSection from "../components/xinpin/xinpinSection"
export default {
    name:"xinpin",
    components:{
      wyHomeHeader,
      "wy-home-nav":wyHomeNav,
      xinpinSection
	}
}

</script>
<style>
 @import "../assets/css/public";
  @import "../assets/css/swiper.min";
</style>
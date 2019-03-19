<!--  -->
<template>
  <div class="flex_sec">
      <wyZhenxuanHeader></wyZhenxuanHeader>
      <wyZhenxuanSection class="zhenzhen"></wyZhenxuanSection>
      <wyFooter></wyFooter>
  </div>
</template>

<script>
import wyZhenxuanHeader from "../components/wyZhenXuan/wyZhenxuanHeader.vue"
import wyZhenxuanSection from "../components/wyZhenXuan/wyZhenxuanSection"
import wyFooter from "../components/common/wyFooter"
export default {
    name:"zhenxuan",
    components:{
        wyZhenxuanHeader,
        wyZhenxuanSection,
        wyFooter
    }
}

</script>
<style>
  @import "../assets/css/public";
  section{
    flex:1;
    overflow: auto;
    /* background:red; */
  }
</style>
<!--  -->
<template>
  <div class="flex_sec">
      <wyShiwuHeader></wyShiwuHeader>
      <wyShiwuNav></wyShiwuNav>
      <wyShiwuSection></wyShiwuSection>
      <wyFooter></wyFooter>
  </div>
</template>

<script>
import wyShiwuHeader from "../components/wyShiwu/wyShiwuHeader"
import wyShiwuNav from "../components/wyShiwu/wyShiwuNav"
import wyShiwuSection from "../components/wyShiwu/wyShiwuSection"
import wyFooter from "../components/common/wyFooter"
export default {
    name:"shiwu",
    components:{
        wyShiwuHeader,
        wyShiwuNav,
        wyShiwuSection,
        wyFooter
    }
}

</script>
<style>
  @import "../assets/css/public";
   
</style>
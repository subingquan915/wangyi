<!--  -->
<template>
  <div class="flex_sec">
      <wyFenleiHead></wyFenleiHead>
      <wyFenleiSection></wyFenleiSection>
      <wyFooter></wyFooter>
  </div>
</template>

<script>
import wyFenleiHead from "../components/wyFenlei/wyFenleiHead"
import wyFenleiSection from "../components/wyFenlei/wyFenleiSection"
import wyFooter from "../components/common/wyFooter"
export default {
    name:"fenlei",
    
 components:{
     wyFenleiHead,
     wyFenleiSection,
     wyFooter
	}
}

</script>
<style>
  @import "../assets/css/public";
  
</style>
<!--  -->
<template>
  <div class="flex_sec">
      <wyHomeHeader v-if="zhuyeInfo" :data="zhuyeInfo"></wyHomeHeader>
      <wy-home-nav></wy-home-nav>
      <section>        
        <wy-home-lunbo :value="zhuyeInfo"></wy-home-lunbo>
        <wy-home-server></wy-home-server>
        <wy-Home-Banner></wy-Home-Banner>
        <wyHomeFreshman></wyHomeFreshman>
      </section>
      
      <wyFooter></wyFooter>
  </div>
</template>

<script>


import wyHomeHeader from "../components/wyHome/wyHomeHeader"
import wyHomeNav from "../components/wyHome/wyHomeNav"
import wyHomeLunbo from "../components/wyHome/wyHomeLunbo"
import wyHomeServer from "../components/wyHome/wyHomeServer"
import wyHomeBanner from "../components/wyHome/wyHomeBanner"
import wyHomeFreshman from "../components/wyHome/wyHomeFreshman"
import wyFooter from "../components/common/wyFooter"

import axios from "Axios"

export default {
 name: "zhuye",

 components:{
      wyHomeHeader,
      "wy-home-nav":wyHomeNav,
      "wy-home-lunbo":wyHomeLunbo,
      wyHomeServer,
      wyHomeBanner,
      wyHomeFreshman,
      wyFooter
  },
  data() {
    return {
      zhuyeInfo: {}
    };
  },
  methods: {
    _initData() {
      axios.get("static/zhuye.json").then(res => {
        // console.log(res)
        this.zhuyeInfo = res.data;
        console.log(this.zhuyeInfo)
      });
    }
  },
  created() {
    this._initData()
  }
}

</script>
<style >
  @import "../assets/css/public";
  @import "../assets/css/swiper.min";
 
</style>
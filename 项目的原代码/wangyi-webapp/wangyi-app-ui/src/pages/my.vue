<!--  -->
<template>
  <div class="flex_sec">
      <myHeader v-if="myInfo" :data="myInfo.geren"></myHeader>
      <mySection :value="myInfo.huodongImg"></mySection>
      <wyFooter></wyFooter>
  </div>
</template>

<script>
import myHeader from "../components/my/myHeader"
import mySection from "../components/my/mySection"
import wyFooter from "../components/common/wyFooter"

import axios from "Axios"
export default {
    name:"my",
    components:{
        myHeader,
        mySection,
        wyFooter
    },
    data(){
      return{
        myInfo:{}
      }
    },

   
    methods:{
      _initData(){
        axios.get("/static/my.json").then(res =>{
          this.myInfo = res.data;
          console.log(this.myInfo)
        })
      }
    },
    
    created(){
      this._initData()
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
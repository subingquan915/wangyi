<!--  -->
<template>
  <div class="flex_sec">
      <goodsCartHeader></goodsCartHeader>
    <goodsCartSection @add="addQal" @minus="minusQal" @goodsChecked="goodsChecked" v-if="cartInfo" :data="cartInfo.products"></goodsCartSection>
    <goodsCartTotal  @cartsChecked="cartsAllChecked" :data="cartInfo"></goodsCartTotal>
      <wyFooter></wyFooter>

  </div>
</template>

<script>
import goodsCartHeader from "../components/goodsCart/goodsCartHeader"
import wyFooter from "../components/common/wyFooter"
import goodsCartSection from "../components/goodsCart/goodsCartSection"
import goodsCartTotal from "../components/goodsCart/goodsCartTotal"

import axios from "Axios"
export default {
    name:"goodsCart",
    components:{
        goodsCartHeader,
        wyFooter,
        goodsCartSection,
        goodsCartTotal
    },
    data() {
      return {
        cartInfo: {},
        totalPrice :0
      };
    },
     methods: {
      _initData() {
        axios.get("static/goodsCart.json").then(res => {
          // console.log(res)
          this.cartInfo = res.data;
          console.log(this.cartInfo);
          this._counteTotalMoney()
        });
      },


      _counteTotalMoney(){
        let totalPrice = 0;
        this.cartInfo.products.forEach((item)=>{
          // console.log(totalPrice);
          if(item.checked){
              totalPrice += item.price * item.qal;
          }
         
        })
         this.cartInfo.totalPrice = totalPrice
      },
      goodsChecked(pid){
        console.log(pid)
      },
      cartsAllChecked(){
          console.log(this.cartInfo.checked)

        let checked = this.cartInfo.checked;
            this.cartInfo.products.forEach((goods)=>{
                goods.checked= checked
            })
      },

      addQal(pid){
         console.log(pid)
          // this.cartInfo.products[pid].qal++
          this.cartInfo.products[pid].qal++
          //  console.log(this.cartInfo.products[pid].qal)
      },
      minusQal(pid){
         console.log(pid)
         if(this.cartInfo.products[pid].qal<=1){
              this.cartInfo.products[pid].qal=1
         }else{
             this.cartInfo.products[pid].qal--
         }     
      }




    },
    created() {
    this._initData()
  },
    watch:{
        cartInfo:{
            deep:true,
            handler:function(n,o){
              // console.log(n)
              this._counteTotalMoney()
            }
        }
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
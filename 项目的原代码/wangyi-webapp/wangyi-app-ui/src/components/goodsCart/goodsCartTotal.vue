<!--  -->
<template>
  <div class="total">
    <div class="total-left">
        <input type="checkbox" v-model="data.checked" @change="cartsChecked">
        <p>已选(<span>3</span>)</p>
    </div>
    <div class="total-right">
        <div class="jiage">
            <p>合计：¥<span>{{data.totalPrice}}</span></p>
            <p>活动优惠：¥<span>305|{{data.checked}}</span></p>
        </div>
        <input type="button" value="下单">
    </div>
</div>
</template>

<script>
export default {
    name:"goodsCartTotal",
    props:["data"],
    methods:{
        cartsChecked(){
            this.$emit("cartsChecked")
        }
    }
}

</script>
<style>

/* total  */
.total{
    display:flex;
    margin: 0 0.15rem;
    justify-content: space-between;
    height: 0.48rem;
    align-items: center;
    background: #fafafa;
}
.total-left {
    display:flex;
    align-items: center;
}
.total-left p{
    font-size:0.13rem;
    color: #7f7f7f;

}

.total-right{
    display:flex;
    align-items: center;
}
.jiage p:nth-child(1){
    font-size: 0.13rem;
    color: #a63533;
}
.jiage p:nth-child(2){
    font-size: 0.11rem;
    color: #7f7f7f;
    
}

.total-right input{
    border: none;
    width: 1.12rem;
    background: red;
    height: 0.48rem;
}
</style>
<!--  -->
<template>
  <section>
    <div class="cart">
       
        <div class="goodlist">
            <div class="goods"  v-for="(item,pid) in data">           
                <input type="checkbox" v-model="item.checked"  @change='selected(pid)'> 
                <img class="goodimg" :src="item.pic" alt="">
                <div class="miaoshu">
                    <p class="p1">
                        <span>{{item.title}}</span>
                        <span>{{item.dec}}</span>
                    </p>
                    <p class="p2">￥{{item.price}}</p>                       
                       
                </div>
                <div class="good-right">
                    <span @click="minus(pid)">－</span>
                    <span>{{item.qal}}</span>
                    <span @click.prevent.default="add(pid)">＋</span>
                </div>
            </div>
            
        </div>
    </div>
</section>
</template>

<script>
export default {
    name:"goodsCartSection",
    props:["data"],
    methods:{
            selected(pid){
                console.log(pid)
                this.$emit("goodsChecked",pid)
            },
            add(pid){
                console.log(pid)
                this.$emit("add",pid)
            },
            minus(pid){
                console.log(pid)
                this.$emit("minus",pid)
            }
        }
}

</script>
<style>

/* section */
.cart-top p{
    color: #e7983f;
    font-size: 0.13rem;
    background: #fef8db;
    line-height: 0.39rem;
    padding: 0 0.15rem;
}

.goods{
    height: 1.04rem;
    display: flex;
    margin: 0 0.15rem;
    align-items:center;
    position: relative;
}

.goodimg{
    width: 0.8rem;
    height: 0.8rem;
    background: #f4f4f4;
    margin-right: 0.1rem;
}
.miaoshu{
    float: 1;
}
.p1 span:nth-child(1){
    color: #333;
    font-size: 0.13rem;
    display: block;
}
.p1 span:nth-child(2){
    color: #828282;
    font-size: 0.12rem;
    display: block;
}


.p2{
    color: #393939;
    font-size: 0.11rem;
    margin-top: 0.29rem;
}
.good-right{
    position: absolute;

    right: 0;
    bottom:0.15rem;
    /* bottom: 0; */
    display: flex;
    border: 1px solid #7f7f7f;
    align-items: center;
}
.good-right span{
    

    text-align: center;
    display: block;
    font-size: 0.1rem;
    width: 0.29rem;
    height: 0.25rem;
    line-height: 0.25rem;
    /* border: 1px solid #7f7f7f; */
}
.good-right span:nth-child(2){
    border-left: 1px solid #7f7f7f;
    border-right: 1px solid #7f7f7f;
}
</style>
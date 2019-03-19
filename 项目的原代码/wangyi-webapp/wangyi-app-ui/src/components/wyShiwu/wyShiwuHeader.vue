<!--  -->
<template>
  <!-- header -->
    <div class="header">
        <router-link tag="a" to="/shiwu">发现</router-link>
        <router-link tag="a" to="/zhenxuan">甄选家</router-link>
    </div>
</template>

<script>
export default {
    name: "wyShiwuHeader",
}

</script>
<style>
/* header */
.header{
    display: flex;
    justify-content: center;
    height: 0.49rem;
    align-items: center;
}
.header a:nth-child(1){
    font-size: 0.19rem;
    color: #a63533;
    margin-right: 0.16rem;
}
.header a:nth-child(2){
    color: #818181;
    font-size: 0.13rem;
}
</style>
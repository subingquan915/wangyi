<!--  -->
<template>
  <!-- header -->
    <header>
        <router-link tag="a" to="/shiwu">发现</router-link>
        <router-link tag="a" to="/zhenxuan">甄选家</router-link>
    
    </header>
</template>

<script>
export default {
    name:'wyZhenxuanHeader',
}

</script>
<style>

/* header */
header{
    display: flex;
    justify-content: center;
    height: 0.49rem;
    align-items: center;
    border-bottom: 1px solid #d9d9d9;
}
header a:nth-child(1){
    color: #818181;
    font-size: 0.13rem;
    margin-right: 0.16rem;
}
header a:nth-child(2){
    font-size: 0.19rem;
    color: #a63533;
    
}
</style>
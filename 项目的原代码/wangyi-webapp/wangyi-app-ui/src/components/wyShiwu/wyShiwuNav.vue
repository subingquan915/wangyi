<!--  -->
<template>
  <!-- nav-->
    <div class="nav">
        <a href="">推荐</a>
        <a href="">晒单</a>
        <a href="">达人</a>
        <a href="">上新</a>
        <a href="">HOME</a>
    </div>
</template>

<script>
export default {
    name:"wyShiwuNav"
}

</script>
<style>
/* nav */
.nav{
    display: flex;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;

}

.nav a{
    text-align: center;
    flex: 1;
    font-size: 0.13rem;
    color: #8a8a8a;
    line-height: 0.35rem;
}

</style>
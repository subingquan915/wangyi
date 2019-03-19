<template>
  <div id="app">
    <!-- <img src="/static/logo.png"> -->
    <router-view/>
 
  </div>
</template>

<script>
import zhuye from './pages/zhuye'
import shiwu from './pages/shiwu'

export default {
  name: 'App',
  components:{
      zhuye,
      shiwu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@function rem( $px) {
  @return $px*(1/100)*1rem;
}
*{
  margin:0;
  padding:0;
}
li{
  list-style:none;
}
html{
  height:100%;
}
body{
  height:100%;
}
a{
  color:#000;
  
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height:100%;
}
/* 重写swiper 样式*/
.swiper-pagination-bullet-active{
  background:#fff!important;
}
</style>

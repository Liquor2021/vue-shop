<template>
  <div class="back">
    <van-nav-bar  left-arrow fixed placeholder :border=false>
      <template #right>
        <img src="../assets/img/home1.svg" @click="home">
      </template>
      <template #title>
        <b>{{title}}</b>
      </template>
      <template #left>
        <img src="../assets/img/newArrival/left.svg" @click="$router.back()">
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
    props:["title"],
    methods:{
      home(){
        this.$router.push('/home');
        this.$root.active = 0;
      }
    }
}
</script>

<style lang="less" scoped>
.back {
    box-shadow: 0px 0px 10px 0px #e0e0e0;
}
img {
    width: 20px;
}
b {
    color: #2c3167;
}
</style>
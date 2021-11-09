<template>
  <!-- 积分商城 -->
  <div class="shop">
    <back :title="name"></back>
    <img src="../assets/img/me/up.svg" />
    <p>积分乐园升级啦！<br />请下载或更新最新版官方商城APP进行体验哦！</p>
  </div>
</template>

<script>
import back from "../components/Back.vue";
export default {
  data() {
    return {
      name: "积分商城",
    };
  },
  components: {
    back,
  },
};
</script>

<style lang="less" scoped>
.shop {
  background-color: #f6f6f6;
  height: 100vh;
  img {
    width: 128px;
    display: block;
    margin: 150px auto;
    margin-bottom: 20px;
  }
  p {
      width: 100vw;
      display: inline-block;
    font-size: 14px;
    text-align: center;
    color: #aaaaaa;
    line-height: 18px;
  }
}
</style>
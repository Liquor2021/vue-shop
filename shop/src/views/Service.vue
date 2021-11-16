<template>
  <!-- 客服中心 -->
  <div class="service">
    <back :title="name"></back>
    <img src="../assets/img/me/up.svg" />
    <p>客服中心暂未开通！<br />请下载或更新最新版官方商城APP进行体验哦！</p>
  </div>
</template>

<script>
import back from "../components/Back.vue";
export default {
  data() {
    return {
      name: "客服中心",
    };
  },
  components: {
    back,
  },
};
</script>

<style lang="less" scoped>
.service {
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
    line-height: 26px;
  }
}
</style>
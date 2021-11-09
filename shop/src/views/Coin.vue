<template>
  <!-- C币专享 -->
  <div class="coin">
    <back :title="name"></back>
    <van-tabs
      v-model="active"
      title-active-color="#2c3167"
      color="#2c3167"
      line-height="2px"
    >
      <van-tab title="未使用">
        <img src="../assets/img/me/money.svg" />
        <p>空空如也~</p>
      </van-tab>
      <van-tab title="已使用">
        <img src="../assets/img/me/money.svg" />
        <p>空空如也~</p>
      </van-tab>
      <van-tab title="已过期">
        <img src="../assets/img/me/money.svg" />
        <p>空空如也~</p>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import back from "../components/Back.vue";
export default {
  data() {
    return {
      name: "C币专享",
      active: 0,
    };
  },
  components: {
    back,
  },
};
</script>

<style lang="less" scoped>
.coin {
  background-color: #f6f6f6;
  height: 100vh;
  img {
    width: 128px;
    display: block;
    margin: 150px auto;
    margin-bottom: 20px;
  }
  p {
    font-size: 14px;
    text-align: center;
    color: #aaaaaa;
  }
}
</style>
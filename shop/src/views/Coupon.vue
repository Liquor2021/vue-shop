<template>
  <!-- 领券中心 -->
  <div class="coupon">
    <!-- 导航栏 -->
    <back :title="name"></back>

    <img src="../assets/img/coupon/a2.png" alt="" />
  </div>
</template>

<script>
import back from "../components/Back.vue";
export default {
  data() {
    return {
      name: "领券中心",
    };
  },
  components: {
    back,
  },
};
</script>

<style lang="less" scoped>
img {
  display: block;
  margin: 100px auto;
  width: 80%;
}
</style>
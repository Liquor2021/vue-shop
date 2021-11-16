<template>
  <!-- 我的收藏 -->
  <div class="footprint">
    <back :title="name"></back>
    <img src="../assets/img/me/foot.svg" />
    <p>暂无收藏数据，赶紧逛起来吧~</p>
  </div>
</template>

<script>
import back from "../components/Back.vue";
export default {
  data() {
    return {
      name: "我的收藏",
    };
  },
  components: {
    back,
  },
};
</script>

<style lang="less" scoped>
.footprint {
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
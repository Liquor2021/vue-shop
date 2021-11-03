<template>
  <!-- 顶部logo栏 -->
  <div class="topNav">
    <div class="logo">
      <img src="../assets/img/shrink.svg" class="shrink" @click="skip" />
      <img src="../assets/img/name1.svg" class="name" />
      <img src="../assets/img/me_top.svg" class="me_top" />
    </div>
    <!-- Tab 标签页 -->
    <van-tabs v-model="active" color="#fff" title-inactive-color="#b0b0b0">
      <van-tab v-for="ta in TabTitle" :key="ta.id" :title="ta.cate_name">
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      TabTitle: [],
      active: 0,
    };
  },
  methods: {
    skip() {
      this.$router.push("/classify");
    },
  },
  created() {
    this.axios.get("/category").then((res) => {
      this.TabTitle = res.data;
    });
  },
};
</script>

<style lang="less">
.topNav {
  box-shadow: 0px 0px 20px -10px #b2b2b2;
  .logo {
    box-sizing: border-box;
    width: 100vw;
    height: 45px;
    display: flex;
    padding: 6px 12px;
    .shrink {
      cursor: pointer;
      width: 20px;
    }
    .name {
      flex: 1;
      width: 127px;
      height: 25px;
      transform: translateY(4px);
    }
    .me_top {
      cursor: pointer;
      width: 20px;
    }
  }
  .van-tabs__nav--line.van-tabs__nav--complete {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
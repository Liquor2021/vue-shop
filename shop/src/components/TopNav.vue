<template>
  <!-- 顶部logo栏 -->
  <div class="topNav">
    <div class="logo">
      <!-- <img src="../assets/img/me_top.svg" class="me_top" /> -->
      <img src="../assets/img/shrink.svg" class="shrink" @click="shrink" />
      <img src="../assets/img/name1.svg" class="name" />
      <img src="../assets/img/search.svg" class="search" @click="search" />
    </div>
    <!-- Tab 标签页 -->
    <van-tabs v-model="active" color="#fff" title-inactive-color="#b0b0b0">
      <van-tab title="热门推荐" to="/home/recommend"></van-tab>
      <van-tab title="家电电器" to="/home/appliances"></van-tab>
      <van-tab title="服饰鞋帽" to="/home/clothing"></van-tab>
      <van-tab title="影音数码" to="/home/audio"></van-tab>
      <van-tab title="零食水果" to="/home/food"></van-tab>
      <van-tab title="居家生活" to="/home/life"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    search() {
      this.$router.push("/search");
    },
    shrink() {
      if (this.$root.active != 2) {
        this.$router.push("/classify");
      }
    },
    recommend() {
      this.$router.push("/home/recommend");
    },
  },
  created() {
    // console.log(this.$route.path);
    //当前url路由地址
    if (this.$route.path == "/home/appliances") {
      this.active = 1;
    } else if (this.$route.path == "/home/clothing") {
      this.active = 2;
    } else if (this.$route.path == "/home/audio") {
      this.active = 3;
    } else if (this.$route.path == "/home/food") {
      this.active = 4;
    } else if (this.$route.path == "/home/life") {
      this.active = 5;
    } else {
      this.active = 0;
    }
  },
};
</script>

<style lang="less">
.topNav {
  position: sticky;
  top: 0;
  box-shadow: 0px 0px 20px -10px #b2b2b2;
  z-index: 10;
  .logo {
    box-sizing: border-box;
    width: 100vw;
    height: 45px;
    display: flex;
    padding: 6px 12px;
    background-color: #fff;
    .search {
      cursor: pointer;
      width: 20px;
    }
    .name {
      flex: 1;
      width: 127px;
      height: 25px;
      transform: translateY(4px);
    }
    .shrink {
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
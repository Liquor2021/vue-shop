<template>
  <div id="app">
    <!-- 顶部logo栏 -->
    <top-nav></top-nav>

    <!-- 底部标签栏 -->
    <navs></navs>
    <router-view />
  </div>
</template>

<script>
import navs from "./components/Nav.vue";
import topNav from "./components/TopNav.vue";
export default {
  data() {
    return {};
  },
  components: {
    navs, //底部标签栏
    topNav, //顶部标签栏
  },
};
</script>

<style lang="less">
</style>

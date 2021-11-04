<template>
  <div id="app">
    <!-- 底部标签栏 -->
    <navs></navs>
    <router-view />
  </div>
</template>

<script>
import navs from "./components/Nav.vue";
export default {
  data() {
    return {};
  },
  components: {
    navs, //底部标签栏
  },
};
</script>

<style lang="less">
</style>

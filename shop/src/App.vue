<template>
  <div id="app">
    <!-- 底部标签栏 -->
    <navs v-if="this.$route.meta.navs"></navs>
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

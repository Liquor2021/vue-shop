<template>
  <!-- 分类 -->
  <div class="classify">
    <h1>分类</h1>
  </div>
</template>
<script>
export default {
  beforeRouteEnter(t, f, next) {
    next((vm) => {
      vm.$root.active = 2;
    });
  },
};
</script>
<template>
  <div class="life">
    <page :arr="life"></page>
  </div>
</template>

<script>
import life from "../mock-data/life";
import page from "../components/Page.vue";
export default {
  data() {
    return {
      life,
    };
  },
  created(){
    window.scrollTo(0, 0);
  },
  components: {
    page,
  },
};
</script>
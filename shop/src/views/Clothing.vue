<template>
  <div class="clothing">
    <page :arr="clothing"></page>
  </div>
</template>

<script>
import clothing from "../mock-data/clothing";
import page from "../components/Page.vue";
export default {
  data() {
    return {
      clothing,
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
<template>
  <div class="food">
    <page :arr="food"></page>
  </div>
</template>

<script>
import food from "../mock-data/food";
import page from "../components/Page.vue";
export default {
  data() {
    return {
      food,
    };
  },
  components: {
    page,
  },
};
</script>
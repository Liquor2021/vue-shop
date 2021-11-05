<template>
  <div class="audio">
    <page :arr="audio"></page>
  </div>
</template>

<script>
import audio from "../mock-data/audio";
import page from "../components/Page.vue";
export default {
  data() {
    return {
      audio,
    };
  },
  components: {
    page,
  },
};
</script>
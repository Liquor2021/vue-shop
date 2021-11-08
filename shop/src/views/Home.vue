<template>
  <div class="home">
    <!-- 顶部logo栏 -->
    <top-nav></top-nav>
    <router-view :id="id"/>
  </div>
</template>


<script>
import topNav from "../components/TopNav.vue";

export default {
  data(){
    return{
      id:99,
    }
  },
  components: {
    topNav, //顶部logo栏
  },
  created() {
    if (this.$route.name == "Home") {
      this.$router.push("/home/recommend");
    }
  },
  updated(){
      if (this.$route.name == "Home") {
      this.$router.push("/home/recommend");
    }
  },
  beforeRouteUpdated() {
    // console.log(this.$route.params.id);
    // this.id=this.$route.params.id;
  },
};
</script>


<style>
.home {
  background-color: #f6f6f6;
}
</style>
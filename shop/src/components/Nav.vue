<template>
  <!-- Tabbar 标签栏 -->
  <van-tabbar v-model="active">
    <!-- 首页 -->
    <van-tabbar-item to="/home">
      <span>首页</span>
      <template #icon="props">
        <img :src="props.active ? icon.active : icon.inactive" />
      </template>
    </van-tabbar-item>

    <!-- 新品 -->
    <van-tabbar-item to="/new">
      <span>新品</span>
      <template #icon="props">
        <img :src="props.active ? icon.new_active : icon.new_inactive" />
      </template>
    </van-tabbar-item>

    <!-- <van-tabbar-item icon="friends-o">发现</van-tabbar-item> -->

    <!-- 分类 -->
    <van-tabbar-item to="/classify">
      <span>分类</span>
      <template #icon="props">
        <img
          :src="props.active ? icon.classify_active : icon.classify_inactive"
        />
      </template>
    </van-tabbar-item>

    <!-- 购物车 -->
    <van-tabbar-item to="/cart">
      <span>购物车</span>
      <template #icon="props">
        <img :src="props.active ? icon.car_active : icon.car_inactive" />
      </template>
    </van-tabbar-item>

    <!-- 我的 -->
    <van-tabbar-item to="/me">
      <span>我的</span>
      <template #icon="props">
        <img :src="props.active ? icon.me_active : icon.me_inactive" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      icon: {
        active: require("../assets/img/home1.svg"),
        inactive: require("../assets/img/home.svg"),
        new_active: require("../assets/img/new2.svg"),
        new_inactive: require("../assets/img/new.svg"),
        car_active: require("../assets/img/car1.svg"),
        car_inactive: require("../assets/img/car.svg"),
        classify_active: require("../assets/img/classify1.svg"),
        classify_inactive: require("../assets/img/classify.svg"),
        me_active: require("../assets/img/me1.svg"),
        me_inactive: require("../assets/img/me.svg"),
      },
    };
  },
  components: {},
  methods: {},
  computed: {
    active: {
      get() {
        return this.$root.active;
      },
      set(v) {
        this.$root.active = v;
      },
    },
  },
};
</script>


<style lang="less">
.van-tabbar {
  box-shadow: 0px 0px 20px -10px #b2b2b2;
}
</style>
<template>
  <div class="page">
    <!-- 轮播图 -->
    <banner :banner="arr[0].banner"></banner>

    <!-- 尺寸 -->
    <img :src="arr[0].material[0].pic" class="b1" alt=" " v-if="arr[0].material[0].pic"/>
    <!-- 标题  新品出击-->
    <img :src="arr[0].material[1].pic" class="nav" />
    <!-- 产品 -->
    <img :src="arr[0].material[3].pic" class="banners" />
    <product-list :product="arr[0].new"></product-list>

    <!-- 好评优选 -->
    <img :src="arr[0].material[2].pic" alt="" />
    <img :src="arr[0].material[4].pic" class="banners" />
    <product-list :product="arr[0].best"></product-list>
  </div>
</template>

<script>
import banner from "../components/Banner.vue";
import ProductList from "../components/ProductList.vue";
export default {
  props: ["arr"],
  data() {
    return {};
  },
  components: {
    banner, //家电轮播图
    ProductList, //产品列表
  },
};
</script>


<style lang="less" scoped>
.page {
  padding-bottom: 50px;
}
img {
  display: block;
  width: 100%;
}
.b1 {
  width: 100%;
  height: 148px;
}
.banners {
  cursor: pointer;
  margin-bottom: 10px;
  height: 200px;
}
</style>
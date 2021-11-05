<template>
<!-- 家电电器 -->
  <div class="appliances">
      <!-- 家电轮播图 -->
    <!-- <banner :banner="appliance[0].banner"></banner> -->

    <!-- 尺寸 -->
    <!-- <img :src="appliance[0].material[0].pic" class="b1"> -->
    <!-- 标题  新品出击-->
    <!-- <img :src="appliance[0].material[1].pic" class="nav"> -->
    <!-- 产品 -->
    <!-- <img :src="appliance[0].material[3].pic" class="banners">
    <product-list :product="appliance[0].new"></product-list> -->

    <!-- 好评优选 -->
    <!-- <img :src="appliance[0].material[2].pic" alt="">
    <img :src="appliance[0].material[4].pic" class="banners">
    <product-list :product="appliance[0].best"></product-list> -->
    <page :arr="appliance"></page>
  </div>
</template>

<script>
import appliance from "../mock-data/appliances";
// import banner from "../components/Banner.vue";
// import ProductList from "../components/ProductList.vue";
import page from "../components/Page.vue";
export default {
  data() {
    return {
      appliance,
    };
  },
  components: {
    // banner, //家电轮播图
    // ProductList,//产品列表
    page,
  },
};
</script>

<style lang="less" scoped>
// .appliances{
//     padding-bottom: 50px;
// }
img {
    display: block;
    width: 100%;
}
.b1 {
    width: 100%;
    height: 140;
}
.banners {
    cursor: pointer;
    margin-bottom: 10px;
    height: 200px;
}
</style>
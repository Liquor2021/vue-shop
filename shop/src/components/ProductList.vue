<template>
  <van-grid :gutter="0" :column-num="2" class="product" v-if="product" :border=false>
    <van-grid-item v-for="value in product" :key="value.id" class="product_box">
      <template #icon>
        <img :src="value.pic" class="product_img" />
      </template>
      <template #text>
        <b class="product_name">{{ value.msg }}</b>
        <p class="product_price">￥{{ value.price }}</p>
      </template>
    </van-grid-item>
  </van-grid>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style lang="less" >
.product {
  cursor: pointer;
  padding-left: 10px;
  padding-right: 5px;
  .product_box{
      padding-right: 5px;
      margin-top: 0px;
      margin-bottom: 0px;
  }
  .product_img {
    width: 100%;
  }
  .product_name {
    margin-top: 10px;
    width: 150px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
    font-family: "微软雅黑";
    height: 14px;
    font-size: 13px;
  }
  .product_price {
      color: rgb(217, 22, 28);
      font-size: 18px;
      width: 100%;
      text-align: left;
      margin-top: 8px;
  }
}
</style>
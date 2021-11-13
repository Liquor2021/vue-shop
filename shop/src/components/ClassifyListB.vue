<template>
  <van-grid
    :gutter="6"
    :column-num="2"
    class="productb"
    v-if="product"
    :border="false"
  >
    <van-grid-item
      v-for="value in product"
      :key="value.id"
      class="productb_box"
      @click="ToDetails($event,value)"
    >
      <template #icon>
        <img :src="value.image" class="productb_img" />
      </template>
      <template #text>
        <b class="productb_name">{{ value.store_name }}</b>
        <p class="productb_price">￥{{ value.price }}</p>
      </template>
    </van-grid-item>
  </van-grid>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  props: ["product"],
  methods:{
    ...mapMutations(["msg"]),
    ToDetails(event,value){
      this.$router.push({path:'/details',query:{id:value.id}});
      this.msg(value);
    }
  }
};
</script>

<style lang="less" >
.productb {
  // padding-left: 10px;
  // padding-right: 5px;
  margin-top: 6px;
  .productb_box {
    cursor: pointer;
    //   padding-right: 5px;
    //   margin-top: 0px;
    //   margin-bottom: 0px;
  }
  .productb_img {
    width: 100%;
    // height: 162px;
  }
  .productb_name {
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
  .productb_price {
    color: rgb(217, 22, 28);
    font-size: 18px;
    width: 100%;
    text-align: left;
    margin-top: 8px;
  }
}
</style>
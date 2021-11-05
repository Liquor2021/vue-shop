<template>
  <div class="banner">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="b in banner" :key="b.id">
        <img
          :src="b.pic"
          alt=""
          class="banner_img"
          @click="b_click($event, b)"
        />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: ["banner"],
  methods: {
    b_click(event, id) {
      console.log(id); //图片产品id
    },
  },
};
</script>

<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  height: 150px;
  text-align: center;
  /* background-color: #39a9ed; */
}
.banner_img {
  width: 100%;
  height: 150px;
}
</style>
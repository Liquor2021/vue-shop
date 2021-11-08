<template>
  <!-- 分类 -->
  <div class="classify">
    <van-tabs
      v-model="active"
      scrollspy
      sticky
      class="classify_list"
      title-active-color="#9299ea"
      title-inactive-color="#2c3167"
    >
      <van-tab
        v-for="(c, i) in classify"
        :title="c.cate_name"
        :key="c.id"
        :title-style="{ backgroundColor: i == active ? '#fff' : '#ecebeb' }"
      >
        <!-- 类名 -->
        <van-divider
          :style="{
            color: '#2c3167',
            borderColor: '#2c3167',
            padding: '5px 46px',
            fontWeight: 'bold',
          }"
          >{{ c.cate_name }}</van-divider
        >
        <!-- 产品 -->
        <van-grid :column-num="3">
          <van-grid-item
            v-for="c in classify.children"
            :key="c.id"
            :text="c.cate_name"
          >
            <van-image :src="c.pic" class="classify_img"/>
          </van-grid-item>
        </van-grid>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      classify: [],
    };
  },
  beforeRouteEnter(t, f, next) {
    next((vm) => {
      vm.$root.active = 2;
    });
  },
  created() {
    this.axios.get("/category").then((res) => {
      this.classify = res.data;
    });
  },
};
</script>


<style lang="less">
.classify_list {
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: #f6f6f6;
  .van-sticky {
    width: 80px;
    .van-tabs__wrap {
      height: 100vh;
      width: 100%;
      background-color: #ecebeb;
      .van-tabs__nav {
        padding-left: 0px;
        padding-top: 10px;
        flex-wrap: wrap;
        background-color: #ecebeb;
        width: 100%;
        height: 50vh;
      }
    }
  }
  .van-tabs__content {
    flex: 1;
    text-align: center;
  }
  .van-tabs__line {
    background-color: #fff;
    display: none;
  }
  .van-divider--hairline::after,
  .van-divider--hairline::before {
    transform: scaleY(1);
  }
  .classify_img{
    display: block;
    width: 50px;
  }
}
</style>
<template>
  <!-- 分类 -->
  <div class="classify">
    <!-- 搜索框 -->
    <van-search v-model="value" placeholder="请输入搜索关键词" class="classify_search"/>
    <!-- 分类内容 -->
    <van-tabs
      v-model="active"
      scrollspy
      class="classify_list"
      title-active-color="#9299ea"
      title-inactive-color="#2c3167"
    >
      <van-tab
        v-for="(c, i) in classify"
        :title="c.cate_name"
        :key="c.id"
        :title-style="{ backgroundColor: i == active ? '#fff' : '#f2f2f2' }"
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
        <van-grid :column-num="3" :border="false">
          <van-grid-item v-for="ch in c.children" :key="ch.id">
            <img :src="ch.pic" class="classify_img" />
            <b class="classify_name">{{ ch.cate_name }}</b>
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
      value: '',
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
.classify_search {
  position: sticky;
  top: 0px;
  z-index: 5;
  height: 54px;
}
.classify_list {
  width: 100vw;
  display: flex;
  .van-tabs__wrap {
    height: 85vh;
    box-sizing: border-box;
    position: sticky;
    top: 54px;
    width: 80px;
    background-color: #f2f2f2;
    .van-tabs__nav {
      display: flex;
      padding-left: 0px;
      flex-wrap: wrap;
      background-color: #f2f2f2;
      width: 100%;
      .van-tab {
        height: 50px;
      }
    }
  }
  .van-tabs__content {
    flex: 1;
    text-align: center;
    box-sizing: border-box;
    padding-bottom: 50px;
  }
  .van-grid-item__content {
    cursor: pointer;
  }
  .van-tabs__line {
    background-color: #fff;
    display: none;
  }
  .van-divider--hairline::after,
  .van-divider--hairline::before {
    transform: scaleY(1);
  }
  .classify_img {
    display: block;
    width: 50px;
    height: 50px;
  }
  .classify_name {
    margin-top: 5px;
    font-size: 12px;
  }
}
</style>
<template>
  <!-- 搜索页面 -->
  <div class="search">
    <back :title="name"></back>
    <!-- 搜索 -->
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      shape="round"
      show-action
      autofocus="true"
      ref="inp"
      @clear="clear"
      @search="onSearch"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>

    <!-- 商品 -->
    <classify-listb :product="res" v-if="res.length > 0"></classify-listb>
    <div v-else class="search_hot">
      <h1>热门搜索</h1>
      <ul @click="hot">
        <li>手机</li>
        <li>衣服</li>
        <li>洗衣机</li>
        <li>空调</li>
        <li>鞋</li>
      </ul>
      <img src="../assets/img/hot/c1.webp" />
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import back from "../components/Back.vue";
import ClassifyListb from "../components/ClassifyListB.vue";
export default {
  data() {
    return {
      name: "Search",
      value: "",
      res: [],
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
      this.search();
    },
    search() {
      this.axios.get(`/products?keyword=${this.value}`).then((res) => {
        // console.log(res);
        this.res = res.data;
      });
      this.$refs.inp.focus();
    },
    hot(event) {
      if (event.target.tagName == "UL") return;
      // console.log(event.target.textContent);
      this.value = event.target.textContent;
      this.search();
    },
    clear() {
      this.res = [];
    },
  },
  mounted() {
    this.$refs.inp.focus();
  },
  components: {
    back,
    ClassifyListb,
  },
};
</script>


<style lang="less" scoped>
.search_hot {
  padding: 20px 16px;
  h1 {
    font-size: 16px;
    margin-bottom: 12px;
  }
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      cursor: pointer;
      background-color: rgb(240, 240, 240);
      margin-right: 14px;
      margin-bottom: 12px;
      font-size: 14px;
      padding: 12px 12px;
    }
  }
  img {
    display: block;
    width: 100%;
    margin-top: 16px;
  }
}
</style>
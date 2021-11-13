<template>
  <!-- 商品分类列表 -->
  <div class="ClassifyList">
    <!-- 搜索栏 -->
    <div class="ClassifyList_search">
      <img src="../assets/img/left.svg" @click="$router.back()" />
      <input type="text" placeholder="更多好货期待你的探索" />
      <img
        src="../assets/img/home.svg"
        class="classHome"
        @click="$router.push('home')"
      />
    </div>

    <!-- 筛选 -->
    <ul class="screen">
      <li :style="{ color: back == 1 ? '#333' : '#b0b0b0' }" @click="back = 1">
        综合
      </li>
      <li :style="{ color: back == 2 ? '#333' : '#b0b0b0' }" @click="back = 2">
        评价
      </li>
      <li :style="{ color: back == 3 ? '#333' : '#b0b0b0' }" @click="back = 3">
        人气
      </li>
      <li
        class="class_price"
        :style="{ color: back == 4 || back == 5 ? '#333' : '#b0b0b0' }"
        @click="price"
      >
        价格
        <img src="../assets/img/down.svg" class="up" v-show="!color1" />
        <img src="../assets/img/down.svg" class="down" v-show="!color2" />
        <img src="../assets/img/down_f.svg" class="up" v-show="color1" />
        <img src="../assets/img/down_f.svg" class="down" v-show="color2" />
      </li>
    </ul>

    <!-- 商品列表 -->
    <classify-listb :product="classify_res"></classify-listb>
  </div>
</template>

<script>
import ClassifyListb from "../components/ClassifyListB.vue";
import tv from "../mock-data/tv";
export default {
  data() {
    return {
      color1: true,
      color2: true,
      back: 1,
      classify_res: [],
      tv,
    };
  },
  components: {
    ClassifyListb,
  },
  methods: {
    price() {
      if (this.color1 && this.color2) {
        this.back = 4;
        this.color1 = false;
      } else if (!this.color1 && this.color2) {
        this.back = 5;
        this.color1 = true;
        this.color2 = false;
      } else if (this.color1 && !this.color2) {
        this.back = 4;
        this.color2 = true;
        this.color1 = false;
      }
    },
    res() {
      //综合
      this.axios
        .get(`products?limit=8&keyword=&sid=${this.$route.query.id}`)
        .then((res) => {
          //   console.log("综合=>", res.data);
          this.classify_res = res.data;
        });
    },
    popularity() {
      //人气
      this.axios
        .get(
          `products?limit=8&keyword=&sid=${this.$route.query.id}&salesOrder=desc`
        )
        .then((res) => {
          //   console.log("人气=>", res.data);
          this.classify_res = res.data;
        });
    },
    asc() {
      //价格升序
      this.axios
        .get(
          `products?limit=8&keyword=&sid=${this.$route.query.id}&priceOrder=asc`
        )
        .then((res) => {
          //   console.log("价格升序=>", res.data);
          this.classify_res = res.data;
        });
    },
    desc() {
      //价格降序
      this.axios
        .get(
          `products?limit=8&keyword=&sid=${this.$route.query.id}&priceOrder=desc`
        )
        .then((res) => {
          //   console.log("价格降序=>", res.data);
          this.classify_res = res.data;
        });
    },
  },
  created() {
    if (this.$route.query.id == 29) {
      this.classify_res = this.tv[0].data;
    } else {
      this.res();
    }
  },
  watch: {
    back() {
      if (this.back == 3) {
        this.popularity();
        this.color1 = true;
        this.color2 = true;
      } else if (this.back == 1 || this.back == 2) {
        this.res();
        this.color1 = true;
        this.color2 = true;
      } else if (this.color1 == false) {
        this.asc();
      } else if (this.color2 == false) {
        this.desc();
      }
    },
  },
};
</script>

<style lang="less" scoped>
.ClassifyList {
  background-color: #f6f6f6;
  height: 100vh;
  .ClassifyList_search {
    background-color: #fff;
    height: 32px;
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    img {
      cursor: pointer;
      width: 28px;
      height: 28px;
    }
    input {
      height: 26px;
      width: 240px;
      background-color: #f6f6f6;
      padding-left: 10px;
      border: 1px solid #eee;
      outline: none;
      font-size: 14px;
    }
    .classHome {
      transform: translateY(2px);
      margin-left: 4px;
      width: 24px;
      height: 24px;
    }
  }
  .screen {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 5px 24px 10px 24px;
    font-size: 16px;
    li {
      color: #b0b0b0;
      cursor: pointer;
    }
    .class_price {
      position: relative;
      padding-right: 10px;

      .up {
        width: 26px;
        position: absolute;
        right: -8px;
        top: -9px;
        transform: rotate(180deg);
      }
      .down {
        width: 26px;
        position: absolute;
        right: -9px;
        bottom: -9px;
      }
    }
  }
}
</style>
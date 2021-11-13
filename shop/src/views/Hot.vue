<template>
  <!-- 热卖榜 -->
  <div class="hot">
    <!-- 导航栏 -->
    <back :title="name"></back>

    <img
      v-for="nm in hot[0].material"
      :key="nm.id"
      :src="nm.pic"
      class="new_material"
    />

    <!-- 热销列表 -->
    <van-grid
      :gutter="0"
      :column-num="2"
      class="hot_product"
      v-if="hot[0].new"
      :border="false"
    >
      <van-grid-item
        v-for="value in hot[0].new"
        :key="value.id"
        class="hot_box"
      >
        <template #icon>
          <img :src="value.pic" class="hot_img" />
        </template>
        <template #text>
          <b class="hot_name">{{ value.msg }}</b>
          <p class="hot_price">￥{{ value.price }}</p>
          <h2
            class="hot_repertory"
            v-if="value.repertory > 0"
            @click="ToDetails($event, value)"
          >
            立即购买
          </h2>
          <van-button
            disabled
            class="hot_repertory zero"
            v-if="value.repertory == 0"
            >已抢光</van-button
          >
        </template>
      </van-grid-item>
    </van-grid>

    <!-- 更多推荐 -->
    <img :src="hot[0].morepic.pic" class="new_material" />

    <van-grid
      :gutter="0"
      :column-num="2"
      class="hot_product"
      v-if="hot[0].more"
      :border="false"
    >
      <van-grid-item
        v-for="value in hot[0].more"
        :key="value.id"
        class="hot_box"
      >
        <template #icon>
          <img :src="value.pic" class="hot_img" />
        </template>
        <template #text>
          <b class="hot_name">{{ value.msg }}</b>
          <p class="hot_price">￥{{ value.price }}</p>
          <h2
            class="hot_repertory"
            v-if="value.repertory > 0"
            @click="ToDetails($event, value)"
          >
            立即购买
          </h2>
          <van-button
            disabled
            class="hot_repertory zero"
            v-if="value.repertory == 0"
            >已抢光</van-button
          >
        </template>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import hot from "../mock-data/hot";
import back from "../components/Back.vue";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      hot,
      name: "热卖榜",
    };
  },
  methods: {
    ...mapMutations(["msg"]),
    ToDetails(event, value) {
      this.$router.push({ path: "/details1", query: { id: value.id } });
      this.msg(value);
    },
  },
  components: {
    back,
  },
};
</script>


<style lang="less" >
.hot {
  background-color: rgb(209, 97, 46);
}
.new_material {
  display: block;
  width: 100%;
}
.hot_product {
  cursor: pointer;
  padding-left: 15px;
  padding-right: 9px;
  margin-top: 20px;
  .hot_box {
    padding-right: 6px;
    margin-top: 0px;
    margin-bottom: 6px;
    .van-grid-item__content {
      border-radius: 3%;
    }
  }
  .hot_img {
    width: 100%;
  }
  .hot_name {
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
  .hot_price {
    color: rgb(217, 22, 28);
    font-size: 18px;
    width: 100%;
    text-align: left;
    margin-top: 8px;
  }
  .hot_repertory {
    width: 100%;
    background-color: rgb(235, 71, 59);
    color: #fff;
    font-size: 16px;
    margin-top: 5px;
    border-radius: 15px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    padding-left: 0px;
  }
  .zero {
    background-color: rgb(153, 153, 153);
    text-align: center;
    padding-left: 15px;
  }
}
</style>
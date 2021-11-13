<template>
  <!-- 新品上市 -->
  <div class="NewArrival">
    <!-- 导航栏 -->
    <back :title="name"></back>

    <img
      v-for="nm in NewArrival[0].material"
      :key="nm.id"
      :src="nm.pic"
      class="new_material"
    />

    <!-- 新品列表 -->
    <van-grid
      :gutter="0"
      :column-num="2"
      class="NewArrival_product"
      v-if="NewArrival[0].new"
      :border="false"
    >
      <van-grid-item
        v-for="value in NewArrival[0].new"
        :key="value.id"
        class="NewArrival_box"
      >
        <template #icon>
          <img :src="value.pic" class="NewArrival_img" />
        </template>
        <template #text>
          <b class="NewArrival_name">{{ value.msg }}</b>
          <p class="NewArrival_price">￥{{ value.price }}</p>
          <h2
            class="NewArrival_repertory"
            v-if="value.repertory > 0"
            @click="ToDetails($event, value)"
          >
            立即购买
          </h2>
          <van-button
            disabled
            class="NewArrival_repertory zero"
            v-if="value.repertory == 0"
            >已抢光</van-button
          >
        </template>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import NewArrival from "../mock-data/newArrival";
import back from "../components/Back.vue";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      NewArrival,
      name: "新品上市",
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
.NewArrival {
  background-color: rgb(239, 135, 131);
}
.new_material {
  display: block;
  width: 100%;
}
.NewArrival_product {
  cursor: pointer;
  padding-left: 15px;
  padding-right: 9px;
  margin-top: 20px;
  .NewArrival_box {
    padding-right: 6px;
    margin-top: 0px;
    margin-bottom: 6px;
    .van-grid-item__content {
      border-radius: 3%;
    }
  }
  .NewArrival_img {
    width: 100%;
  }
  .NewArrival_name {
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
  .NewArrival_price {
    color: rgb(217, 22, 28);
    font-size: 18px;
    width: 100%;
    text-align: left;
    margin-top: 8px;
  }
  .NewArrival_repertory {
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
    padding-left: 15px;
  }
}
</style>
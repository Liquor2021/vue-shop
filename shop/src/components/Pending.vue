<template>
  <!-- 待发货 -->
  <div class="pending" v-if="times && times.length > 0">
    <div class="pengding_list" v-for="(t, i) in waits" :key="times[i]">
      <!-- 时间状态栏 -->
      <van-cell :title="times[i]" value="未发货" />
      <!-- 商品数据 -->
      <div v-if="t.length > 0">
        <div v-for="d in t" :key="d.id">
          <van-card
            :num="d.selectedNum"
            :price="d.price"
            :desc="d.msg"
            :thumb="d.pic"
            class="sub_card"
            v-if="d.pic"
          />
        </div>
        <div v-for="d in t" :key="d.image">
          <van-card
            :num="d.selectedNum"
            :price="d.price"
            :desc="d.store_name"
            :thumb="d.image"
            class="sub_card"
            v-if="d.image"
          />
        </div>
      </div>
      <!-- 商品卡片加载loading -->
      <van-loading
        type="spinner"
        color="#2c3167"
        class="sub_loading"
        size="40px"
        v-else
        vertical
      >
        加载中..
      </van-loading>
      <!-- 总金额 -->
      <h3>共{{ t.length }}件商品，总金额￥{{ price[i] }}</h3>
      <div class="pe_refund">
        <p @click="check($event, i)">查看详情</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      times: [],
      price: [],
    };
  },
  created() {
    setTimeout(() => {
    //   console.log(this.time[0].time);
      this.time.forEach((v) => {
        if (this.time.length < 1) {
          this.times = v.time;
          this.price = v.Allprice;
          this.times = Array(this.times);
          this.price = Array(this.price);
        } else {
          this.times.push(v.time);
          this.price.push(v.Allprice);
        }
      });
    }, 1000);
  },
  methods: {
    check(event, i) {
      this.$router.push({
        path: "/LookPay1",
        query: { i: i, time: this.times[i], price: this.price[i] },
      });
    },
  },
  computed: {
    ...mapState(["waits", "time"]),
  },
};
</script>

<style lang="less">
.pending {
  .pengding_list {
    margin-top: 10px;
    background-color: #fff;
    h3 {
      height: 24px;
      line-height: 24px;
      font-size: 14px;
      text-align: right;
      margin: 0px 18px;
      background-color: #fff;
      border-bottom: 1px solid #ebedf0;
      padding-bottom: 10px;
      padding-top: 6px;
    }
  }
  .sub_card {
    background-color: #fff;
  }
  .van-card__desc {
    font-size: 12px;
    color: #333;
    max-height: 40px;
    white-space: pre-wrap;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .pe_refund {
    position: relative;
    // margin-top: 10px;
    background-color: #fff;
    height: 54px;
    p {
      cursor: pointer;
      position: absolute;
      background-color: #2c3167;
      right: 16px;
      top: 12px;
      width: 80px;
      height: 22px;
      line-height: 24px;
      border-radius: 16px;
      //   color: #b9b9b9;
      color: #fff;
      font-size: 14px;
      text-align: center;
      //   border: 1px solid #ccc;
      padding: 4px;
    }
  }
}
</style>
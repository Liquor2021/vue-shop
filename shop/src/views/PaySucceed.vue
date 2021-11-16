<template>
  <!-- 订单支付成功 -->
  <div class="PaySucceed">
    <!-- <back :title="name"></back> -->
    <div class="suc_box">
      <img src="../assets/img/submit/r.svg" />
      <h1>订单支付成功</h1>
      <van-cell-group>
        <van-cell title="订单编号" value="wx1561564484515151" />
        <van-cell title="下单时间" :value="$route.query.time" />
        <van-cell title="支付方式" value="余额支付" />
        <van-cell title="支付金额" :value="$route.query.pay" />
      </van-cell-group>
      <!-- 查看订单 -->
      <h3 @click="look">查看订单</h3>
      <!-- 返回首页 -->
      <h3 @click="$router.push('/home')">返回首页</h3>
    </div>
  </div>
</template>

<script>
// import back from "../components/Back.vue";
export default {
  data() {
    return {
      name: "支付成功",
    };
  },
  created() {},
  methods: {
    look() {
      this.$router.push({
        path: "/LookPay",
        query: {
          time: this.$route.query.time,
          paymoney: this.$route.query.pay,
        },
      });
    },
  },
  computed: {},
  components: {
    // back,
  },
};
</script>

<style lang="less">
.PaySucceed {
  background-color: #f6f6f6;
  min-height: 100vh;
  overflow: hidden;
  .suc_box {
    position: relative;
    background-color: #fff;
    margin: 100px auto;
    width: 94%;
    border-radius: 6px;
    padding-bottom: 10px;
    .van-hairline--top-bottom {
      position: static;
    }
    img {
      position: absolute;
      top: -36px;
      left: 50%;
      transform: translateX(-50%);
      border: 5px solid #f6f6f6;
      border-radius: 50%;
      width: 70px;
    }
    h1 {
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      line-height: 50px;
      padding-top: 50px;
      padding-bottom: 10px;
    }
    h3 {
      cursor: pointer;
      text-align: center;
      font-size: 16px;
      width: 90%;
      line-height: 44px;
      background-color: #2c3167;
      margin: 20px auto;
      color: #fff;
      border-radius: 22px;
    }
  }
}
</style>
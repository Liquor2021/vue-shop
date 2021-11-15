<template>
  <!-- 订单支付成功 -->
  <div class="PaySucceed">
    <div class="suc_box">
      <img src="" alt="" />
      <h1>订单支付成功</h1>
      <div class="suc_content">
        <van-cell-group>
          <van-cell title="订单编号" value="wx1561564484515151" />
          <van-cell title="下单时间" value="内容" />
          <van-cell title="支付方式" value="余额支付" />
          <van-cell title="支付金额" :value="$route.query.pay" />
        </van-cell-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: "2021-11-15 00:00:00",
    };
  },
  created() {
    let date = new Date();
    let Y = date.getFullYear().toString();
    let M = (date.getMonth() + 1).toString();
    let D = date.getDate().toString();
    let h = date.getHours().toString();
    let m = date.getMinutes().toString();
    let s = date.getSeconds().toString();
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    this.time = `${Y}-${M}-${D} ${h}:${m}:${s}`
    console.log(date);
  },
};
</script>

<style lang="less" scoped>
.PaySucceed {
  background-color: #f6f6f6;
  min-height: 100vh;
  .suc_box {
    background-color: #fff;
    margin: 100px auto;
    width: 94%;
  }
}
</style>
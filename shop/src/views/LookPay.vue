<template>
  <div class="lookPay">
    <div class="top_txt">
      <img src="../assets/img/submit/w.svg" class="w" />
      <img src="../assets/img/submit/car.svg" class="car" />
      <p>
        <span>商家未发货,请耐心等待</span>
        <b>{{ $route.query.time }}</b>
      </p>
    </div>
    <van-steps :active="active">
      <van-step>待付款</van-step>
      <van-step>待发货</van-step>
      <van-step>待收货</van-step>
      <van-step>待评价</van-step>
      <van-step>已完成</van-step>
    </van-steps>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
    };
  },
};
</script>

<style lang="less" scoped>
.lookPay {
  background-color: #f6f6f6;
  min-height: 100vh;
  .top_txt {
    position: relative;
    background-color: #2c3167;
    height: 60px;
    line-height: 40px;
    img {
      position: absolute;
      left: 20px;
      width: 58px;
      border-radius: 50%;
    }
    .w {
      width: 40px;
      left: -16px;
      top: -16px;
      background-color: #f6f6f6;
      box-shadow: 0px 0px 10px 0px #f6f6f6;
      transform: rotate(90deg);
    }
    .car {
      width: 24px;
      left: 30px;
      bottom: 2px;
      animation: car 4s linear infinite;
    }

    p {
      margin-left: 60px;
      font-size: 14px;
      color: #fff;
      display: flex;
      justify-content: space-between;
      span {
        font-weight: bold;
      }
      b {
        font-size: 12px;
        margin-right: 12px;
      }
    }
  }
}
@keyframes car {
  0% {
    transform: translateX(-200%);
  }
  50% {
    transform: translateX(600%);
  }
  100% {
    transform: translateX(1400%);
  }
}
</style>
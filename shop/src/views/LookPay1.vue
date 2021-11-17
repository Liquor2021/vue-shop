<template>
  <!-- 订单状态 -->
  <div class="lookPay">
    <back :title="name"></back>
    <div class="top_txt">
      <img src="../assets/img/submit/w.svg" class="w" />
      <img src="../assets/img/submit/car.svg" class="car" />
      <p>
        <span>商家未发货,请耐心等待</span>
        <b>{{ $route.query.time }}</b>
      </p>
    </div>
    <!-- 状态栏 -->
    <van-steps :active="active">
      <van-step>待付款</van-step>
      <van-step>待发货</van-step>
      <van-step>待收货</van-step>
      <van-step>待评价</van-step>
      <van-step>已完成</van-step>
    </van-steps>
    <!-- 地址栏 -->
    <div class="address_box">
      <van-contact-card
        type="edit"
        name="张三"
        tel="13000000000"
        :editable="false"
        class="look_card"
      />
      <p class="look_address">
        <b>地址：</b>
        <span>浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室</span>
      </p>
    </div>
    <!-- 商品总数 -->
    <h1>共{{ length }}件商品</h1>
    <!-- 商品卡片 -->
    <div v-if="length > 0">
      <van-card
        :num="num[d - 1]"
        :price="price[d - 1]"
        :desc="desc[d - 1]"
        :thumb="thumb[d - 1]"
        :key="d"
        class="sub_card"
        v-for="d in desc.length"
      />
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
    <!-- 联系客服 -->
    <h2>联系客服</h2>
    <!-- 订单详情 -->
    <div class="look_details">
      <van-cell title="订单编号" value="wx1561564484515151" />
      <van-cell title="下单时间" :value="$route.query.time" />
      <van-cell title="订单类型" value="普通订单" />
      <van-cell title="支付状态" value="已支付" />
      <van-cell title="支付方式" value="余额支付" />
    </div>
    <div class="look_money">
      <van-cell title="支付金额" :value="'￥' + $route.query.price" />
      <van-cell title="积分抵扣" value="￥0" />
      <van-cell title="" :value="value" size="large" class="All_pay" />
    </div>
    <!-- 申请退款 -->
    <div class="refund" @click="refund">
      <p>申请退款</p>
    </div>
  </div>
</template>

<script>
import back from "../components/Back.vue";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      name: "订单状态",
      active: 1,
      length: 0, //订单有几件
      desc: [], //商品卡片描述信息
      price: [], //商品价格
      num: [], //商品数量
      thumb: [], //商品图片
      value: "实际付款：￥0",
    };
  },
  created() {
    setTimeout(() => {
      if (this.$route.query.paymoney) {
        this.value = "实际付款：￥" + this.$route.query.paymoney;
      } else {
        this.value = "实际付款：￥" + this.$route.query.price;
      }

      //计算订单有几件商品
      this.length = this.waits[this.$route.query.i].length;
      //商品卡片赋值
      this.waits[this.$route.query.i].forEach((v) => {
        if (v.pic) {
          this.desc.push(v.msg);
          this.price.push(v.price);
          this.num.push(v.selectedNum);
          this.thumb.push(v.pic);
        } else {
          this.desc.push(v.store_name);
          this.price.push(v.price);
          this.num.push(v.selectedNum);
          this.thumb.push(v.image);
        }
      });
    }, 1000);
  },
  methods: {
    ...mapMutations(["removeShop"]),
    refund() {
      this.removeShop(this.$route.query.i);
      this.$router.push('/me');
    },
  },
  components: {
    back,
  },
  computed: {
    ...mapState(["waits"]),
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
    overflow: hidden;
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
  .address_box {
    position: relative;
    .look_card {
      margin-top: 2px;
      padding-bottom: 44px;
      margin-bottom: 10px;
    }
    .look_address {
      position: absolute;
      font-size: 14px;
      padding: 0px 40px;
      top: 58px;
      display: flex;
      span {
        flex: 1;
      }
      b {
        display: inline-block;
        width: 44px;
      }
    }
  }
  h1 {
    font-size: 16px;
    background-color: #fff;
    padding: 12px 16px;
    border-bottom: 1px solid #e0e0e0;
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
  h2 {
    cursor: pointer;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    background-color: #fff;
    color: #2c3167;
    border-top: 1px solid #e0e0e0;
  }
  .look_details,
  .look_money {
    margin-top: 10px;
    // margin-bottom: 10px;
  }
  .All_pay {
    font-size: 16px;
    .van-cell__value {
      color: #2c3167;
    }
  }
  .refund {
    position: relative;
    margin-top: 10px;
    background-color: #fff;
    height: 50px;
    p {
      cursor: pointer;
      position: absolute;
      right: 16px;
      top: 8px;
      width: 80px;
      height: 24px;
      line-height: 24px;
      border-radius: 16px;
      color: #b9b9b9;
      font-size: 14px;
      text-align: center;
      border: 1px solid #ccc;
      padding: 4px;
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
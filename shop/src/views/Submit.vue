<template>
  <div class="submit">
    <back :title="name"></back>
    <van-contact-card
      type="edit"
      name="张三"
      tel="13000000000"
      :editable="false"
      class="card"
    />
    <p class="sub_address">
      <b>地址：</b>
      <span>浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室</span>
    </p>
    <h1>共1件商品</h1>
    <!-- 商品卡片 -->
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
      class="sub_card"
    />
    <!-- 优惠券单元格 -->
    <van-coupon-cell
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      @click="showList = true"
    />
    <!-- 优惠券列表 -->
    <van-popup
      v-model="showList"
      round
      position="bottom"
      style="height: 90%; padding-top: 4px"
    >
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
  </div>
</template>

<script>
import back from "../components/Back.vue";
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元",
};
export default {
  data() {
    return {
      name: "订单详情",
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList: false,
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true,
        },
      ],
    };
  },
  methods: {
    onChange(index) {
      //   this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange() {
      this.coupons.push(coupon);
    },
  },
  components: {
    back,
  },
};
</script>

<style lang="less" scoped>
.submit {
  position: relative;
  background-color: #f6f6f6;
  min-height: 100vh;
  .card {
    margin-top: 2px;
    padding-bottom: 44px;
    margin-bottom: 10px;
  }
  .sub_address {
    position: absolute;
    font-size: 14px;
    padding: 0px 40px;
    top: 106px;
    display: flex;
    span {
        flex: 1;
    }
    b {
      display: inline-block;
      width: 44px;
    }
  }
  h1 {
    font-size: 16px;
    background-color: #fff;
    padding: 16px;
    border-bottom: 1px solid #e0e0e0;
  }
  .sub_card {
    margin-top: 0px;
  }
}
</style>
    
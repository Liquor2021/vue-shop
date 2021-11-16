<template>
  <!-- 订单详情 -->
  <div class="submit">
    <back :title="name" :orders="orders"></back>
    <!-- 地址栏 -->
    <div class="address_box">
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
    </div>
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
    <!-- 优惠券单元格 -->
    <van-coupon-cell
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      @click="showList = true"
      class="coupon_cell"
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

    <!-- 订单优惠 -->
    <van-cell title="订单优惠" value="无" />

    <!-- 快递费用 -->
    <van-cell title="快递费用" value="免运费" />

    <!-- 积分抵扣 -->
    <van-cell title="积分抵扣" value="暂无积分抵扣" class="cell_bottom" />

    <!-- 支付方式 -->
    <div class="sub_pay">
      <h1 class="payWay">支付方式</h1>
      <div
        :class="[active ? 'active paybox' : 'paybox']"
        @click="active = true"
      >
        <p>
          <img src="../assets/img/submit/a.svg" />
          微信支付
        </p>
        <p>微信快捷支付</p>
      </div>
      <div
        :class="[!active ? 'active paybox' : 'paybox']"
        @click="active = false"
      >
        <p>
          <img src="../assets/img/submit/b.svg" />
          余额支付
        </p>
        <p>可用余额：{{ money }}</p>
      </div>
    </div>

    <!-- 提交导航栏 -->
    <van-submit-bar :price="Allprice" button-text="支付订单" @submit="onpay" />
  </div>
</template>

<script>
import back from "../components/Back.vue";
import { mapMutations, mapState } from "vuex";
import { Toast } from "vant";
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1814592000,
  valueDesc: "1.5",
  unitDesc: "元",
};
export default {
  data() {
    return {
      name: "订单详情",
      length: 0, //订单有几件
      desc: [], //商品卡片描述信息
      price: [], //商品价格
      num: [], //商品数量
      thumb: [], //商品图片
      active: true, //支付方式
      Allprice: 0, //总价
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
  created() {
    setTimeout(() => {
      //计算订单有几件商品
      this.length = this.orders.length;
      //   console.log(this.orders);
      //商品卡片赋值
      this.orders[0].forEach((v) => {
        if (v.pic) {
          this.desc.push(v.msg);
          this.price.push(v.price);
          this.num.push(v.selectedNum);
          this.thumb.push(v.pic);
          //   加入总价
          this.Allprice =
            Number(v.selectedNum) * Number(v.price) * 100 + this.Allprice;
        } else {
          this.desc.push(v.store_name);
          this.price.push(v.price);
          this.num.push(v.selectedNum);
          this.thumb.push(v.image);
          //   加入总价
          this.Allprice =
            Number(v.selectedNum) * Number(v.price) * 100 + this.Allprice;
        }
      });
    }, 1000);
  },
  methods: {
    ...mapMutations([
      "removeOrder",
      "paymoney",
      "waitSend",
      "storageTime",
      "noarr",
    ]),
    onChange(index) {
      //   this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange() {
      this.coupons.push(coupon);
    },
    //支付订单按钮
    onpay() {
      if (this.active == true) {
        Toast.fail("微信支付参数获取失败...");
      } else {
        this.paymoney(this.Allprice / 100);
        // 余额大于消费额才跳转
        if (this.money > this.Allprice / 100) {
          console.log(this.orders);
          this.orders.nopay = true;
          this.waitSend(this.orders);
          // 提交加载动画
          Toast.loading({
            message: "订单支付成功...",
            forbidClick: true,
          });
          let t = setTimeout(() => {
            //   获取提交时间
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
            let time = `${Y}-${M}-${D} ${h}:${m}:${s}`;
            let num = { time: time, Allprice: this.Allprice / 100 };
            this.storageTime(num);
            this.$router.push({
              path: "/PaySucceed",
              query: { pay: this.Allprice / 100, time: time },
            });
            clearTimeout(t);
          }, 1000);
        }
      }
    },
  },
  beforeDestroy() {},
  components: {
    back,
  },
  computed: {
    ...mapState(["orders", "money"]),
  },
  watch: {
    chosenCoupon() {
      if (this.chosenCoupon != -1) {
        this.Allprice = this.Allprice - 150;
      } else {
        this.Allprice = this.Allprice + 150;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.submit {
  position: relative;
  background-color: #f6f6f6;
  min-height: 100vh;
  padding-bottom: 20px;
  .address_box {
    position: relative;
    .card {
      margin-top: 2px;
      padding-bottom: 44px;
      margin-bottom: 10px;
    }
    .sub_address {
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
    margin-top: 0px;
    background-color: #fff;
  }
  .coupon_cell {
    border-top: 1px solid #e0e0e0;
  }
  .cell_bottom {
    &::after {
      display: none;
    }
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
  .sub_loading {
    width: 76px;
    margin: 50px auto;
  }
  .sub_pay {
    background-color: #fff;
    margin-top: 10px;
    margin-bottom: 40px;
    h1 {
      font-size: 14px;
      border: none;
    }
    .active {
      border: 1px solid #ec0202;
    }
    .paybox {
      cursor: pointer;
      display: flex;
      padding: 8px;
      margin: 0px 16px;
      margin-bottom: 10px;
      border-radius: 4px;
      p {
        flex: 1;
        font-size: 14px;
        text-align: center;
        height: 26px;
        line-height: 26px;
        display: flex;
        justify-content: center;
        img {
          display: block;
          width: 24px;
          transform: translateY(-2px);
          margin-right: 5px;
        }
      }
      p:nth-of-type(2) {
        border-left: 1px solid rgb(218, 218, 218);
      }
    }
  }
}
</style>
    
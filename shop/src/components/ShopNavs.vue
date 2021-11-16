<template>
  <!-- 商品导航栏 -->
  <div class="shopNav">
    <van-goods-action>
      <van-goods-action-icon
        icon="star"
        :text="text"
        :color="colorshow"
        @click="onStar"
      />
      <van-goods-action-icon icon="cart-o" text="购物车" to="/cart" />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="onaddcart"
      />
      <van-goods-action-button type="danger" text="立即购买" @click="onbuy" />
    </van-goods-action>

    <!-- 商品规格 -->
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      :quota-used="quotaUsed"
      :hide-stock="sku.hide_stock"
      :message-config="messageConfig"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
import { mapMutations } from "vuex";
export default {
  props: ["msg"],
  data() {
    return {
      text: "收藏",
      colorshow: "#ccc",
      show: false,
      quotaUsed: 5,
      sku: {
        //初始化demo数据
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "颜色", //属性名称
            k_id: "1", //属性的ID值 唯一 在当前产品里面唯一
            v: [
              //颜色属性可用值列表
              {
                id: "30349", //属性ID
                name: "款式1", //属性名
                //属性图片，默认只有第一行属性有
                imgUrl: this.msg.pic,
              },
              //   {
              //     id: "1215",
              //     name: "白色",
              //     imgUrl: this.msg.image,
              //   },
            ],
            k_s: "s1", //属性的k_s值 对应list里面组合键名
          },
          {
            k: "尺寸",
            k_id: "2",
            v: [
              {
                id: "1193",
                name: "常规",
              },
              //   {
              //     id: "1194",
              //     name: "2",
              //   },
            ],
            k_s: "s2",
            count: 2,
          },
        ],
        // 所有 sku 的组合列表，如下是：白色1、白色2、天蓝色1、天蓝色2
        list: [
          {
            id: 2259,
            price: 12000, //价格
            s1: "1215", //对应属性列表里面 k_s 等于s1的属性id值
            s2: "1193",
            stock_num: 20, //库存
            goods_id: 946755, //产品ID
          },
          {
            id: 2260,
            price: 11000,
            s1: "1215",
            s2: "1194",
            stock_num: 2,
            goods_id: 946755,
          },
          {
            id: 2257,
            price: this.msg.price * 100,
            s1: "30349",
            s2: "1193",
            stock_num: 40,
            goods_id: 946755,
          },
          {
            id: 2258,
            price: 10000,
            s1: "30349",
            s2: "1194",
            stock_num: 50,
            goods_id: 946755,
          },
        ],
        price: "135.00",
        stock_num: 227, // 商品总库存
        none_sku: false, // 是否无规格商品
        hide_stock: false, // 是否隐藏剩余库存
      },
      goods: {
        picture: this.msg.pic,
      },
      goodsId: 123,
      messageConfig: {},
    };
  },
  methods: {
    ...mapMutations(["addcart", "order"]),
    onStar() {
      if (this.colorshow == "#ccc") {
        this.text = "已收藏";
        this.colorshow = "#ff5000";
      } else {
        this.text = "收藏";
        this.colorshow = "#ccc";
      }
    },
    //加入购物车（外）
    onaddcart() {
      this.show = true;
    },
    //立即购买（外）
    onbuy() {
      this.show = true;
    },
    //立即购买
    onBuyClicked(event) {
      this.show = false;
      Toast.loading({
        message: "订单加载中...",
        forbidClick: true,
      });
      this.msg.selectedNum = event.selectedNum;
      this.msg.ze = false;
      this.order(this.msg);
      let t = setTimeout(() => {
        clearTimeout(t);
        this.$router.push("/submit");
      }, 1000);
    },
    //添加购物车
    onAddCartClicked(event) {
      // console.log(event);
      this.show = false;
      //把购买数量添加进去
      this.msg.selectedNum = event.selectedNum;
      this.msg.ze = false;
      this.addcart(this.msg);
    },
  },
};
</script>
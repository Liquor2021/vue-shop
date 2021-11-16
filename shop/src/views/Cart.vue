<template>
  <!-- 购物车 -->
  <div class="cart">
    <!-- 头部标题 -->
    <h1 class="topname">
      购物车
      <b v-if="cartShop" @click="edit = !edit">
        {{ edit ? "编辑" : "完成" }}
      </b>
    </h1>
    <!-- 没有物品时的显示界面 -->
    <div class="cartnone" v-if="!cartShop || cartShop[0] == '1'">
      <!-- <img
        src="https://m.assets.shop.hisense.com/assets/files/cart-empty.27c2747601484e9d.png"
      /> -->
      <img src="../assets/img/car.svg" alt="" />
      <h2>暂无添加的商品</h2>
      <p @click="$router.push('/home')">马上去购物</p>
    </div>

    <!-- 商品卡片 -->
    <van-swipe-cell v-for="ca in cartShop" :key="ca.id">
      <van-card
        :num="ca.selectedNum"
        :price="ca.price"
        :title="ca.store_name"
        class="goods-card"
        :thumb="ca.image"
        v-if="ca.image"
      >
        <!-- <template #footer>
          <van-button size="mini">+1</van-button>
          <van-button size="mini">-1</van-button>
        </template> -->
      </van-card>
      <template>
        <van-checkbox
          v-model="ca.ze"
          @click="onze($event, ca)"
          class="check"
          v-if="ca.image"
        ></van-checkbox>
      </template>
      <template #right>
        <van-button
          square
          text="删除"
          type="danger"
          class="delete-button"
          @click="dele($event, ca)"
        />
      </template>
    </van-swipe-cell>
    <van-swipe-cell v-for="ca in cartShop" :key="ca.msg">
      <van-card
        :num="ca.selectedNum"
        :price="ca.price"
        :title="ca.msg"
        class="goods-card"
        :thumb="ca.pic"
        v-if="ca.pic"
      >
        <!-- <template #footer>
          <van-button size="mini">-1</van-button>
          <van-button size="mini">+1</van-button>
        </template> -->
      </van-card>
      <template>
        <van-checkbox
          v-model="ca.ze"
          v-if="ca.pic"
          @click="onze($event, ca)"
          class="check"
        ></van-checkbox>
      </template>
      <template #right>
        <van-button
          square
          text="删除"
          type="danger"
          class="delete-button"
          @click="dele($event, ca)"
        />
      </template>
    </van-swipe-cell>

    <!-- 提交订单栏 -->
    <van-submit-bar
      :price="num"
      button-text="提交订单"
      tip="你的收货地址不支持同城送, 我们已为你推荐快递"
      @submit="submit"
      v-show="!edit"
    >
      <van-checkbox v-model="checked" @click="all">全选</van-checkbox>
    </van-submit-bar>
    <van-submit-bar
      :price="num"
      button-text="删除"
      @submit="onSubmit"
      v-show="edit"
    >
      <van-checkbox v-model="checked" @click="all">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      arr: [],
      edit: false,
      checked: false,
      num: 0,
    };
  },
  methods: {
    ...mapMutations(["removecart", "delecart", "order", "removeOrder"]),

    // get() {
    //   this.axios
    //     .get("/cart/list", {
    //       headers: {
    //         "Authori-zation": "Bearer " + this.token,
    //       },
    //     })
    //     .then((res) => {
    //       console.log(res);
    //     });
    // },
    // 提交订单
    submit() {
      this.cartShop.forEach((v) => {
        if (v != "1") {
          if (v.ze) {
            this.order(v);
            this.delecart(v);
          }
        }
      });
      this.num = 0;
      localStorage.setItem("num", this.num);
      this.$router.push("/submit");
    },
    //下面删除按钮点击事件回调
    onSubmit(event) {
      if (this.checked) {
        this.removecart();
      } else {
        this.cartShop.forEach((v) => {
          if (v != "1") {
            if (v.ze) {
              this.dele(event, v);
            }
          }
        });
      }
    },
    //单删商品
    dele(event, ca) {
      //如果给勾选上就把总价里的减去
      if (ca.ze) {
        this.num = this.num - ca.selectedNum * ca.price * 100;
      }
      localStorage.setItem("num", this.num);
      this.delecart(ca);
    },
    // 复选框勾选商品
    onze(event, ca) {
      let index = this.cartShop.lastIndexOf(ca);
      let ze = this.cartShop[index].ze;
      if (ze == false) {
        ze = true;
        this.num = this.num - ca.selectedNum * ca.price * 100;
        this.checked = false;
        localStorage.setItem("checked", this.checked);
        localStorage.setItem("cartShop", JSON.stringify(this.cartShop));
      } else {
        let i = 0; //选中个数
        ze = false;
        this.num = this.num + ca.selectedNum * ca.price * 100;
        localStorage.setItem("cartShop", JSON.stringify(this.cartShop));
        // 选中的个数等于购物车的长度 就全选
        this.cartShop.forEach((v) => {
          if (v.ze == true) {
            i++;
            if (i == this.cartShop.length - 1) {
              this.checked = true;
              localStorage.setItem("checked", this.checked);
            }
          }
        });
      }
      localStorage.setItem("num", this.num);
    },
    //全选
    all() {
      if (this.checked) {
        this.cartShop.forEach((v) => {
          // console.log(typeof v);
          if (v == "1") {
            console.log(v);
          } else {
            if (v.ze == false) {
              this.num = this.num + v.selectedNum * v.price * 100;
            }
            v.ze = true;
          }
        });
        localStorage.setItem("num", this.num);
        localStorage.setItem("checked", this.checked);
        localStorage.setItem("cartShop", JSON.stringify(this.cartShop));
      } else {
        this.cartShop.forEach((v) => {
          if (v == "1") {
            console.log(v);
          } else {
            v.ze = false;
          }
        });
        this.num = 0;
        localStorage.setItem("num", this.num);
        localStorage.setItem("checked", this.checked);
        localStorage.setItem("cartShop", JSON.stringify(this.cartShop));
      }
    },
  },
  created() {
    // 清空订单数据
    this.removeOrder();
    this.$root.active = 3;
    this.num = Number(localStorage.getItem("num"));
    if (localStorage.getItem("checked") == "false") {
      this.checked = false;
    } else {
      this.checked = true;
    }
    // this.get();
  },
  computed: {
    ...mapState(["cartShop", "token"]),
  },
};
</script>


<style lang="less" >
.cart {
  padding-bottom: 134px;
  background-color: #f6f6f6;
  min-height: 100vh;
  box-sizing: border-box;
  .topname {
    position: relative;
    height: 44px;
    text-align: center;
    line-height: 44px;
    font-size: 18px;
    background-color: #fff;
    border-bottom: 1px solid #e4e4e4;
    b {
      cursor: pointer;
      position: absolute;
      right: 20px;
      font-size: 14px;
      color: #777777;
    }
  }
  .cartnone {
    width: 100%;
    img {
      display: block;
      width: 100px;
      margin: 100px auto 40px;
    }
    h2 {
      text-align: center;
      font-size: 14px;
      margin-bottom: 52px;
    }
    p {
      cursor: pointer;
      line-height: 42px;
      width: 148px;
      margin: 0px auto;
      text-align: center;
      font-size: 16px;
      color: #fff;
      background-color: #d9161c;
    }
  }
  .van-submit-bar {
    bottom: 50px;
  }
  .goods-card {
    margin: 0;
    background-color: white;
  }
  .delete-button {
    height: 100%;
  }

  .check {
    position: absolute;
    display: inline-block;
    right: 24px;
    width: 30px;
    z-index: 55;
    bottom: 10px;
  }
}
</style>
<template>
  <!-- 商品详情 -->
  <div class="details1">
    <!-- 顶部导航栏 -->
    <div class="details_nav">
      <img src="../assets/img/left.svg" @click="$router.back()" />
      <img src="../assets/img/details/a.svg" @click="showPopup" />
      <van-popup
        v-model="Topshow"
        position="top"
        :style="{ height: '10%' }"
        class="topbox"
      >
        <img src="../assets/img/home.svg" @click="$router.push('/home')" />
        <img
          src="../assets/img/details/search.svg"
          @click="$router.push('/search')"
        />
        <img
          src="../assets/img/me/foot.svg"
          @click="$router.push('/history')"
        />
      </van-popup>
    </div>

    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="4000" indicator-color="black">
      <van-swipe-item v-for="(b, index) in banner" :key="index">
        <img :src="b.pic" alt="" class="details_img" />
      </van-swipe-item>
    </van-swipe>

    <!-- 产品信息 -->
    <div class="details_pirce">
      <span><b>￥</b>{{ price }}</span>
      <b>已售{{ sales }}</b>
    </div>
    <div class="details_msg">
      {{ store_name }}
    </div>

    <div class="option">
      <!-- 省市区选择 -->
      <van-overlay :show="ovshow" @click="ovshow = false" type="primary">
        <div class="wrapper" @click.stop>
          <van-area
            title="选择地址"
            class="de_area"
            :area-list="areaList"
            v-show="ovshow"
            @confirm="chooseThis"
            @change="changeAddr"
            @cancel="ovshow = false"
          />
        </div>
      </van-overlay>

      <div class="de_address" @click="ovshow = true">
        <span>送至</span>
        <b
          ><span v-show="!showAddr">-- 请选择收货地点 --</span>
          {{ showAddr }}</b
        >
        <img src="../assets/img/details/right.svg" />
      </div>
      <!-- 服务 -->
      <div class="de_serve">
        <span>服务</span>
        <b
          ><span>30天保价 </span><span> | 七天无理由</span
          ><span>| 全场包邮</span><span>| 电子发票</span>
        </b>
        <img src="../assets/img/details/right.svg" />
      </div>
    </div>

    <!-- 评论 -->
    <div class="de_comment">
      <span>用户评论(0)</span>
      <b> 好评率0% </b>
      <img src="../assets/img/details/right.svg" />
    </div>

    <!-- 详情 -->
    <h1 class="pic_nav">图片详情</h1>
    <img :src="b.pic" v-for="(b, i) in banner" :key="i" class="Dpic" />

    <!-- 商品导航栏 -->
    <shop-navs :msg="msgg"></shop-navs>
  </div>
</template>

<script>
import { areaList } from "@vant/area-data";
import { mapState } from "vuex";
import ShopNavs from "../components/ShopNavs.vue";
export default {
  props: ["value"],
  data() {
    return {
      Topshow: false, //弹出层
      ovshow: false, //遮罩层
      banner: [],
      areaList,
      listshow: false,
      showAddr: "", //显示地址
      resAddr: "", //传给后端的位置信息
      price:55,//价格
      sales:222,//已售
      store_name:"",//商品信息
      msgg:[],//所有参数信息
    };
  },
  methods: {
    //显示弹出层
    showPopup() {
      this.Topshow = true;
    },
    //选好地址后点击确定
    chooseThis() {
      this.ovshow = false;
      //选中地址成功后回显
      this.showAddr =
        this.resAddr[0].name +
        "-" +
        this.resAddr[1].name +
        "-" +
        this.resAddr[2].name;
    },
    changeAddr(picker) {
      //value=0改变省，1改变市，2改变区
      let val = picker.getValues();
      this.resAddr = val;
    },
  },
  computed: {
    ...mapState(["msg"]),
  },
  created() {
    window.scrollTo(0, 0);
    if (this.msg.id) {
      this.msgg=this.msg;
      this.banner=this.msg.children;
      this.price=this.msg.price;
      this.sales=parseInt(this.msg.price/5);
      this.store_name=this.msg.msg;
    } else {
      let a = JSON.parse(localStorage.getItem("msg"));
      this.msgg=a;
      this.banner=a.children;
      this.price=a.price;
      this.sales=parseInt(a.price/2);
      this.store_name=a.msg;
    }
  },
  components: {
    ShopNavs,
  },
};
</script>

<style lang="less">
.details1 {
  padding-bottom: 50px;
  background-color: #f6f6f6;
  .details_nav {
    position: fixed;
    // background-color: rgba(255, 255, 255, 0.034);
    height: 32px;
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    z-index: 5;
    width: 345px;
    img {
      cursor: pointer;
      width: 22px;
    }
    .topbox {
      display: flex;
      justify-content: space-evenly;
      padding-top: 20px;
      img {
        background-color: #e2e2e2;
        border-radius: 50%;
        padding: 5px;
        width: 30px;
        height: 30px;
      }
    }
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    height: 375px;
  }
  .van-swipe__indicator {
    background-color: #000;
  }
  .details_img {
    width: 375px;
    height: 375px;
  }
  .details_pirce {
    height: 28px;
    padding: 16px 12px;
    padding-bottom: 0px;
    font-size: 18px;
    background-color: #fff;
    span {
      color: #d9161c;
      b {
        color: #d9161c;
        margin: 0;
        font-size: 14px;
      }
    }
    b {
      font-size: 12px;
      color: #777777;
      margin-left: 10px;
      vertical-align: middle;
    }
  }
  .details_msg {
    font-size: 16px;
    padding: 8px 12px;
    background-color: #fff;
    padding-bottom: 0px;
    line-height: 20px;
  }
  .option {
    position: relative;
    padding: 16px 12px;
    padding-bottom: 0px;
    background-color: #fff;
    .de_address {
      cursor: pointer;
      position: relative;
      height: 28px;
      font-size: 14px;
      padding-bottom: 2px;
      border-bottom: 1px solid #dddddd;
      span {
        color: #777777;
      }
      b {
        display: inline-block;
        color: #000;
        margin-left: 20px;
        width: 265px;
        overflow: hidden;
        span {
          color: #000;
        }
      }
      img {
        position: absolute;
        width: 18px;
        right: 0px;
      }
    }
    .de_area {
      //   position: absolute;
      //   z-index: 55;
      width: 100vw;
      //   top: 0px;
      //   transform: translateX(-16px);
      //   background-color: #eae5f1;
    }
    .de_serve {
      cursor: pointer;
      position: relative;
      height: 28px;
      font-size: 14px;
      padding-bottom: 2px;
      //   border-bottom: 1px solid #dddddd;
      margin-top: 20px;
      span {
        color: #777777;
      }
      b {
        display: inline-block;
        color: #000;
        margin-left: 20px;
        width: 265px;
        overflow: hidden;
        span {
          display: inline-block;
          margin-right: 4px;
          font-size: 12px;
          color: #000;
        }
      }
      img {
        position: absolute;
        width: 18px;
        right: 0px;
      }
    }
  }
  .de_comment {
    cursor: pointer;
    position: relative;
    height: 28px;
    font-size: 14px;
    padding-bottom: 2px;
    padding: 16px 12px;
    padding-bottom: 0px;
    background-color: #fff;
    margin-top: 10px;
    span {
      color: #777777;
    }
    b {
      position: absolute;
      display: inline-block;
      color: #000;
      right: 32px;
      top: 16px;
      overflow: hidden;
    }
    img {
      position: absolute;
      width: 18px;
      right: 12px;
      top: 14px;
    }
  }
  .pic_nav {
    font-size: 14px;
    text-align: center;
    line-height: 44px;
    background-color: #fff;
    margin-top: 10px;
  }
  .Dpic {
    display: block;
    width: 100%;
  }
  .wrapper {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
  }
}
</style>
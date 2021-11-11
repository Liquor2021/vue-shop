<template>
  <div class="recommend">
    <!-- banner -->
    <banner :banner="index.banner"></banner>

    <div class="grid">
      <!-- 每日签到 -->
      <span><img src="../assets/img/com_1.png" /><b>每日签到</b></span>
      <!-- 新品上市 -->
      <span @click="$router.push('/newArrival')">
        <img src="../assets/img/com_2.png" />
        <b>新品上市</b>
      </span>
      <!-- 热卖榜 -->
      <span @click="$router.push('/hot')">
        <img src="../assets/img/com_3.gif" />
        <b>热卖榜</b>
      </span>
      <!-- 领券中心 -->
      <span @click="$router.push('/coupon')">
        <img src="../assets/img/com_4.png" />
        <b>领券中心</b>
      </span>
      <!-- 专店查询 -->
      <!-- <span><img src="../assets/img/com_5.png" /><b>专店查询</b></span> -->
    </div>

    <!-- 商城快报 -->
    <van-notice-bar :scrollable="false" background="#fff">
      <template #left-icon>
        <img :src="icons[0].left" class="ico" />
      </template>
      <van-swipe
        vertical
        class="notice-swipe"
        :autoplay="3000"
        :show-indicators="false"
      >
        <van-swipe-item v-for="ro in index.roll" :key="ro.id">{{
          ro.info
        }}</van-swipe-item>
      </van-swipe>
    </van-notice-bar>

    <!-- 新品上线 -->
    <h2 class="rec_h2">新品上线</h2>
    <div class="img_box" v-for="re in rec_child.children" :key="re.id">
      <img :src="re.pic" />
      <h5 class="bef">新品上线 立即选购</h5>
      <img :src="icons[1].right" class="ic_right">
    </div>

    <!-- 选购攻略 id 1681 -->
    <h2 class="rec_h2">选购攻略</h2>
    <banner :banner="icons[2]" class="ban2"></banner>

    <!-- 猜你喜欢 -->
    <h2 class="rec_h2">猜你喜欢</h2>
    <van-grid :gutter="5" :column-num="3" class="rec_like" v-if="index.info">
      <van-grid-item v-for="value in imgs" :key="value.id" text="文字">
        <template #icon>
          <img :src="value.image" class="rec_like_img" />
        </template>
        <template #text>
          <b class="rec_like_name">{{ value.store_name }}</b>
          <p class="rec_like_price">￥{{ value.price }}</p>
        </template>
      </van-grid-item>
    </van-grid>

    <!-- 官方 -->
    <img src="../assets/img/bottom.webp" class="rec_bottom" />
  </div>
</template>

<script>
import banner from "../components/Banner.vue";
export default {
  //   props: ["id"],
  data() {
    return {
      index: [],
      rec_child: [],
      imgs: [],
      icons: [
        {
          left: require("../assets/img/news.png"),
        },
        {
          right: require('../assets/img/right.svg'),
        },
        [
          {
            id: 1681,
            pic: require("../assets/img/banner1.webp"),
          },
          {
            id: 1682,
            pic: require("../assets/img/banner2.webp"),
          },
          {
            id: 1683,
            pic: require("../assets/img/banner3.webp"),
          },
        ],
      ],
    };
  },
  created() {
    this.$root.active=0;
    this.axios.get("/index").then((res) => {
      this.index = res.data;
      let resu = res.data.info.bastList;
      this.imgs = resu.splice(0, 1).concat(resu.splice(1));
    });
    this.axios.get("/category").then((res) => {
      this.rec_child = res.data[5];
    });
  },
  mounted() {},
  watch: {
    //   id(v){
    //       console.log(v)
    //   }
  },
  components: {
    banner, //热门推荐轮播图
  },
};
</script>


<style lang="less">
.recommend {
  background-color: #f6f6f6;
  padding-bottom: 40px;
}
.grid {
  width: 100%;
  height: 73px;
  display: flex;
  margin-top: 10px;
  span {
    display: inline-block;
    flex: 1;
    img {
      cursor: pointer;
      display: block;
      width: 45px;
      height: 45px;
      margin: 0 auto;
    }
    b {
      display: block;
      width: 100%;
      height: 13px;
      text-align: center;
      font-size: 12px;
      transform: scale(0.9);
      color: #444;
      margin-top: 5px;
    }
  }
}

.rec_h2 {
  margin-top: 20px;
  font-size: 18px;
  width: 100%;
  font-weight: bold;
  padding-left: 30px;
  box-sizing: border-box;
}
.img_box {
  position: relative;
  display: block;
  width: 100%;
  height: 325px;
  box-sizing: border-box;
  margin-top: 15px;
  padding: 0 15px;
  img {
    cursor: pointer;
    width: 100%;
    height: 325px;
    border-radius: 10px;
  }
  .bef {
    cursor: pointer;
    position: absolute;
    bottom: 10px;
    left: 20%;
    color: #2c3167;
    font-size: 24px;
    transform: translateY(-1px);
  }
  .ic_right{
    position: absolute;
    bottom: 10px;
    left: 75%;
    width: 24px;
    height: 24px;
  }
}

.notice-swipe {
  height: 40px;
  line-height: 40px;
}
.ico {
  width: 60px;
  height: 14px;
}
.van-notice-bar {
  height: 37px;
  .van-notice-bar__wrap {
    padding-left: 10px;
    margin-left: 10px;
    box-sizing: border-box;
    height: 20px;
    border-left: 1px solid #ccc;
  }
}

.ban2 {
  margin-top: 10px;
  img {
    width: 365px;
    cursor: pointer;
  }
}

.rec_like {
  margin-top: 15px;
  .van-grid-item__content {
    cursor: pointer;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    font-size: 12px;

    .rec_like_img {
      width: 118px;
      height: 118px;
    }
  }
  .rec_like_name {
    margin-top: 10px;
    width: 95px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
    font-family: "微软雅黑";
    height: 13px;
    // font-weight: bold;
    // transform: scale(.9);
  }
  .rec_like_price {
    margin-top: 5px;
    width: 100%;
    text-align: center;
  }
}

.rec_bottom {
  width: 100%;
  margin-top: 10px;
}
</style>
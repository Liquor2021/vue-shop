<template>
  <div class="recommend">
    <!-- banner -->
    <banner :banner="index.banner"></banner>

    <div class="grid">
      <span><img src="../assets/img/com_1.png" /><b>每日签到</b></span>
      <span><img src="../assets/img/com_2.png" /><b>新品上市</b></span>
      <span><img src="../assets/img/com_3.gif" /><b>热卖榜</b></span>
      <span><img src="../assets/img/com_4.png" /><b>领券中心</b></span>
      <span><img src="../assets/img/com_5.png" /><b>专店查询</b></span>
    </div>

    <!-- 新品上线 -->
    <h2>新品上线</h2>
    <div class="img_box" v-for="re in rec_child.children" :key="re.id">
      <img :src="re.pic" />
    </div>
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
    };
  },
  created() {
    this.axios.get("/index").then((res) => {
      this.index = res.data;
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


<style lang="less" scoped>
.recommend {
  background-color: #f6f6f6;
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

h2 {
  margin-top: 20px;
  font-size: 18px;
  width: 100%;
  font-weight: bold;
  padding-left: 30px;
  box-sizing: border-box;
}
.img_box {
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
}
</style>
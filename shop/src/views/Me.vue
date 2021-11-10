<template>
  <!-- 我的 -->
  <div class="me">
    <!-- 个人信息 -->
    <div class="msg">
      <!-- 设置 -->
      <img src="../assets/img/me/set.svg" class="set" @click="$router.push('/set')"/>

      <!-- 头像账号 -->
      <van-image
        round
        fit="cover"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
        class="head"
      >
        <template v-slot:error>加载失败</template>
      </van-image>
      <!-- 用户名 -->
      <span class="user">15626492392</span>
      <!-- 会员积分 -->
      <span class="ji">会员积分 <b> 50</b></span>

      <!-- 成长值 -->
      <div class="grow">
        <!-- 等级 -->
        <h1 class="or_v"><b>V1</b><span>0 成长值</span></h1>
        <h2><span>骆驼会员 享更多优惠</span> <b>会员权益</b></h2>
      </div>
    </div>

    <!-- 我的订单 -->
    <div class="order">
      <div class="or_top">
        <span class="my_order">我的订单</span>
        <span
          class="all_order"
          @click="$router.push({ path: '/plan', query: { active: 0 } })"
        >
          全部订单
          <img src="../assets/img/me/right.svg" class="or_right" />
        </span>
      </div>

      <div class="or_bottom">
        <!-- <div class="or_smbox" v-for="m in me[0].myOrder" :key="m.id">
          <img :src="m.pic" class="or_pic" />
          <p class="or_msg">{{ m.msg }}</p>
        </div> -->
        <div
          class="or_smbox"
          @click="$router.push({ path: '/plan', query: { active: 1 } })"
        >
          <img :src="me[0].myOrder[0].pic" class="or_pic" />
          <p class="or_msg">{{ me[0].myOrder[0].msg }}</p>
        </div>
        <div
          class="or_smbox"
          @click="$router.push({ path: '/plan', query: { active: 2 } })"
        >
          <img :src="me[0].myOrder[1].pic" class="or_pic" />
          <p class="or_msg">{{ me[0].myOrder[1].msg }}</p>
        </div>
        <div
          class="or_smbox"
          @click="$router.push({ path: '/plan', query: { active: 3 } })"
        >
          <img :src="me[0].myOrder[2].pic" class="or_pic" />
          <p class="or_msg">{{ me[0].myOrder[2].msg }}</p>
        </div>
        <div class="or_smbox" @click="$router.push('/evaluate')">
          <img :src="me[0].myOrder[3].pic" class="or_pic" />
          <p class="or_msg">{{ me[0].myOrder[3].msg }}</p>
        </div>
        <div class="or_smbox" @click="$router.push('/refund')">
          <img :src="me[0].myOrder[4].pic" class="or_pic" />
          <p class="or_msg">{{ me[0].myOrder[4].msg }}</p>
        </div>
      </div>
    </div>

    <!-- 我的权益 -->
    <div class="equities">
      <div class="order big">
        <div class="or_top">
          <span class="my_order">我的权益</span>
        </div>

        <div class="or_bottom">
          <!-- <div class="or_smbox four" v-for="m in me[0].equities" :key="m.id">
            <img :src="m.pic" class="or_pic" />
            <p class="or_msg">{{ m.msg }}</p>
          </div> -->
          <div class="or_smbox four" @click="$router.push('/coin')">
            <img :src="me[0].equities[0].pic" class="or_pic" />
            <p class="or_msg">{{ me[0].equities[0].msg }}</p>
          </div>
          <div class="or_smbox four" @click="$router.push('/coupon')">
            <img :src="me[0].equities[1].pic" class="or_pic" />
            <p class="or_msg">{{ me[0].equities[1].msg }}</p>
          </div>
          <div class="or_smbox four" @click="$router.push('/activity')">
            <img :src="me[0].equities[2].pic" class="or_pic" />
            <p class="or_msg">{{ me[0].equities[2].msg }}</p>
          </div>
          <div class="or_smbox four" @click="$router.push('/integral')">
            <img :src="me[0].equities[3].pic" class="or_pic" />
            <p class="or_msg">{{ me[0].equities[3].msg }}</p>
          </div>
          <div class="or_smbox four" @click="$router.push('/shop')">
            <img :src="me[0].equities[4].pic" class="or_pic" />
            <p class="or_msg">{{ me[0].equities[4].msg }}</p>
          </div>
          <div class="or_smbox four" @click="$router.push('/footprint')">
            <img :src="me[0].equities[5].pic" class="or_pic" />
            <p class="or_msg">{{ me[0].equities[5].msg }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 自助服务 -->
    <div class="equities">
      <div class="order">
        <div class="or_top">
          <span class="my_order">自助服务</span>
        </div>
        <div class="or_bottom">
          <div class="or_smbox four" @click="$router.push('/coin')">
            <img :src="me[0].serve[0].pic" class="or_pic" />
            <p class="or_msg">{{ me[0].serve[0].msg }}</p>
          </div>
          <div class="or_smbox four" @click="$router.push('/coin')">
            <img :src="me[0].serve[1].pic" class="or_pic" />
            <p class="or_msg">{{ me[0].serve[1].msg }}</p>
          </div>
          <div class="or_smbox four" @click="$router.push('/coin')">
            <img :src="me[0].serve[2].pic" class="or_pic" />
            <p class="or_msg">{{ me[0].serve[2].msg }}</p>
          </div>
          <div class="or_smbox four" @click="$router.push('/coin')">
            <img :src="me[0].serve[3].pic" class="or_pic" />
            <p class="or_msg">{{ me[0].serve[3].msg }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import me from "../mock-data/me";
export default {
  data() {
    return {
      me,
    };
  },
  created(){
    this.$root.active = 4;
  }
};
</script>



<style lang="less" scoped>
.me {
  background-color: #f6f6f6;
  height: 100vh;
  .msg {
    background-color: #2c3167;
    height: 165px;
    position: relative;
    .set {
      position: absolute;
      cursor: pointer;
      width: 28px;
      height: 28px;
      right: 10px;
      top: 8px;
    }
    .head {
      position: absolute;
      top: 50px;
      left: 15px;
      width: 56px;
      height: 56px;
    }
    .user {
      position: absolute;
      top: 60px;
      left: 85px;
      color: #fff;
      font-size: 14px;
    }
    .ji {
      position: absolute;
      top: 85px;
      left: 86px;
      color: #fff;
      font-size: 12px;
    }
    .grow {
      position: absolute;
      box-sizing: border-box;
      padding: 0 20px;
      padding-right: 10px;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      height: 40px;
      width: 92%;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      color: #fff;
      background-color: #262626;
      display: flex;
      line-height: 40px;
      justify-content: space-between;
      .or_v {
        font-size: 12px;
        b {
          background-color: #f0cc88;
          border-radius: 50%;
          color: rgb(0, 0, 0);
          font-weight: bold;
          padding: 4px 4px;
          margin-right: 5px;
        }
      }
      h2 {
        font-size: 12px;
        transform: scale(0.9);
        span {
          display: inline-block;
          font-size: 12px;
          // transform: scale(0.9);
        }
        b {
          cursor: pointer;
          background-color: #f0cc88;
          border-radius: 20px;
          padding: 5px 8px;
          color: rgb(0, 0, 0);
          font-size: 12px;
          margin-left: 5px;
        }
      }
    }
  }
  .order {
    box-sizing: border-box;
    margin: 15px auto;
    width: 359px;
    height: 110px;
    background-color: #fff;
    padding: 12px;
    .or_top {
      height: 20px;
      display: flex;
      .my_order {
        font-size: 16px;
        flex: 1;
      }
      .all_order {
        cursor: pointer;
        color: #bfbfbf;
        font-size: 13px;
        width: 75px;
        .or_right {
          width: 12px;
          transform: translateY(2px);
        }
      }
    }

    .or_bottom {
      margin-top: 15px;
      display: flex;
      flex-wrap: wrap;
      .or_smbox {
        flex: 1;
        .or_pic {
          cursor: pointer;
          display: block;
          width: 24px;
          height: 24px;
          margin: 5px auto;
        }
        .or_msg {
          cursor: pointer;
          font-size: 12px;
          line-height: 16px;
          text-align: center;
        }
      }
      .four {
        flex: none;
        width: 25%;
        margin-bottom: 20px;
      }
    }
  }
  .big {
    height: 180px;
  }
}
</style>
<template>
  <!-- 设置中心 -->
  <div class="set">
    <back :title="name"></back>
    <!-- 头像 -->
    <van-cell title="头像" is-link class="set_pic" size="large">
      <van-image
        round
        fit="cover"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
        class="set_head"
      >
        <template v-slot:error>加载失败</template>
      </van-image>
    </van-cell>

    <!-- ID -->
    <van-cell title="ID" value="65" />
    <!-- 手机号码 -->
    <van-cell title="手机号码" value="15626492392"> </van-cell>
    <!-- 密码 -->
    <van-cell title="密码" is-link to="/password" />
    <!-- 退出登录 -->
    <button class="set_back" @click="set_back">退出登录</button>
  </div>
</template>

<script>
import back from "../components/Back.vue";
import { mapMutations } from "vuex";
import {Dialog} from "vant"
export default {
  data() {
    return {
      name: "个人信息",
    };
  },
  components: {
    back,
  },
  methods: {
    ...mapMutations(["removeToken"]),
    set_back() {
      this.removeToken();
      Dialog({
        title:"退出登录",
        message:"退出成功",
      }).then(()=>{
        this.$router.push("/home");
        this.$root.active=0;
      })
    },
  },
};
</script>

<style lang="less">
.set {
  position: relative;
  background-color: #f6f6f6;
  height: 100vh;
  .set_pic {
    margin-top: 10px;
    .set_head {
      display: block;
      height: 30px;
      width: 30px;
      margin-left: 125px;
    }
  }
  .set_back {
    cursor: pointer;
    position: absolute;
    bottom: 30px;
    color: #d9161c;
    font-size: 16px;
    left: 50%;
    transform: translateX(-50%);
    height: 42px;
    line-height: 42px;
    width: 90%;
    background-color: #fff;
    border: none;
  }
}
</style>
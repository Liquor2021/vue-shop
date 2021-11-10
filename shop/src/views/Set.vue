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
    <van-cell title="手机号码" value="15626492392" />
    <!-- 密码 -->
    <van-cell title="密码" is-link to="/password" />
  </div>
</template>

<script>
import back from "../components/Back.vue";
export default {
  data() {
    return {
      name: "个人信息",
    };
  },
  components: {
    back,
  },
};
</script>

<style lang="less">
.set {
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
}
</style>
<template>
  <div class="password">
    <back :title="name"></back>
    <h2><b>当前手机号：</b>15626492392</h2>
    <van-form validate-first @failed="onFailed" class="pas">
      <!-- 通过 pattern 进行正则校验 -->
      <van-field
        v-model="value1"
        name="pattern"
        placeholder="设置新密码"
        :rules="[{ pattern, message: '6位以上的数字' }]"
      />
      <!-- 通过 validator 进行函数校验 -->
      <van-field
        v-model="value2"
        name="validator"
        placeholder="确认密码"
        :rules="[{ validator, message: '密码不对应' }]"
      />
      <!-- 通过 validator 进行异步函数校验 -->
      <van-field
        v-model="value3"
        name="asyncValidator"
        placeholder="验证码"
        :rules="[{ validator: asyncValidator, message: '请输入正确的验证码' }]"
      />
      <van-button native-type="button" class="yan">发送验证码</van-button>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit" class="sub"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from "vant";
import Back from "../components/Back.vue";

export default {
  components: { Back },
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      pattern: /\d{6}/,
      name: "修改密码",
    };
  },
  methods: {
    // 校验函数返回 true 表示校验通过，false 表示不通过
    validator(val) {
      return val == this.value1;
    },
    // 异步校验函数返回 Promise
    asyncValidator(val) {
      return new Promise((resolve) => {
        Toast.loading("验证中...");

        setTimeout(() => {
          Toast.clear();
          resolve(/\d{6}/.test(val));
        }, 1000);
      });
    },
    onFailed(errorInfo) {
      console.log("failed", errorInfo);
    },
  },
};
</script>


<style lang="less" scoped>
.password {
  h2 {
    font-size: 16px;
    text-align: center;
    line-height: 80px;
    color: #2c3167;
    b {
      font-weight: bold;
      color: #2c3167;
    }
  }
  .pas {
    position: relative;
    .yan {
      position: absolute;
      bottom: 110px;
      right: 18px;
      color: #2c3167;
      border: none;
      height: 30px;
    }
    .sub {
        margin-top: 60px;
        background-color: #2c3167;
    }
  }
}
</style>

<template>
  <!-- 短信验证  -->
  <div class="phone">
    <van-form @submit="onSubmit">
      <van-field
        v-model.number="account"
        name="account"
        label="手机号"
        placeholder="手机号"
        :trigger="onSubmit"
        :rules="[
          { required: true, message: '请输入手机号', trigger: 'onSubmit' },
          { validator, message: '手机号格式错误', trigger: 'onSubmit' },
        ]"
      />
      <van-field
        v-model="password"
        name="note"
        label="短信验证码"
        placeholder="短信验证码"
        clearable
        :trigger="onSubmit"
        :rules="[
          { required: true, message: '请输入验证码', trigger: 'onSubmit' },
          {
            validator: asyncValidator,
            message: '验证码错误',
            trigger: 'onSubmit',
          },
        ]"
        class="phone_word"
      >
        <template #button>
          <van-button
            size="small"
            type="primary"
            native-type="button"
            class="phone_butt"
            :disabled="isSend"
            @click="sendCode"
            >{{ !isSend ? "发送验证码" : counter + "秒后继续发送" }}</van-button
          >
        </template>
      </van-field>

      <div style="margin: 40px 14px">
        <van-button block type="info" native-type="submit" class="phone_sub"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>


<script>
import { Toast } from "vant";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      account: "",
      password: "",
      sendkey: "",
      counter: 60,
      isSend: false,
      TimeID: null,
    };
  },
  created() {
    //第一次进入网页获取key，用来发送验证码
    this.axios.get("/verify_code").then((res) => {
      // console.log(res.data.key);
      this.sendkey = res.data.key;
    });
  },
  methods: {
    ...mapMutations(["saveToken"]),
    onSubmit(values) {
      console.log("submit", values);
      this.axios
        .post("/login/mobile", {
          phone: this.account,
          captcha: this.password,
          spread: null,
        })
        .then((res) => {
          // console.log(res);
          if (res.status == 200) {
            this.saveToken(res.data.token);
            // toast关闭时的回调函数
            this.$toast.success({
              message:res.msg,
              onClose:()=>{
                this.$router.back();
               }
            });
          } else {
            this.$toast.fail(res.msg);
          }
        });
    },
    // 校验函数返回 true 表示校验通过，false 表示不通过
    validator(val) {
      return /1\d{10}/.test(val);
    },
    // 异步校验函数返回 Promise
    asyncValidator() {
      return new Promise((resolve) => {
        Toast.loading("验证中...");

        setTimeout(() => {
          Toast.clear();
          resolve(true);
        }, 1000);
      });
    },
    sendCode() {
      //发送验证码
      this.axios
        .post("/register/verify", {
          code: "",
          key: this.sendkey,
          phone: this.account,
          type: "login",
        })
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            this.$toast.success(res.msg);
            this.isSend = true;
            this.TimeID = setInterval(() => {
              if (this.counter == 0) {
                this.isSend = false;
                clearInterval(this.TimeID);
                return;
              }
              this.counter--;
            }, 1000);
          } else {
            // console.log(res);
            this.$toast.fail(res.msg);
          }
        });
    },
  },
};
</script>


<style lang="less">
.phone {
  position: relative;
}
.phone_word {
  margin-top: 20px;
  .van-field__body {
    transform: translateY(-5px);
  }
}
.phone_sub {
  background-color: #2c3167;
}
.phone_butt {
  border: none;
  background-color: #fff;
  color: #2c3167;
}
</style>
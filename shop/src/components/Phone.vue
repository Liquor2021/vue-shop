<template>
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
            disabled
            @click="sendCode"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <!-- <van-button native-type="button" class="phone_butt"
        >发送验证码</van-button
      > -->

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
export default {
  data() {
    return {
      account: "",
      password: "",
      val: "123456",
      sendkey: "",
      counter:60,
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
    onSubmit(values) {
      console.log("submit", values);
      this.axios.post("/login", values).then((res) => {
        console.log(res);
      });
    },
    // 校验函数返回 true 表示校验通过，false 表示不通过
    validator(val) {
      return /1\d{10}/.test(val);
    },
    // 异步校验函数返回 Promise
    asyncValidator(val) {
      return new Promise((resolve) => {
        Toast.loading("验证中...");

        setTimeout(() => {
          Toast.clear();
          resolve(val == this.val);
        }, 1000);
      });
    },
    sendCode() {
      // if(!this.account || this.account.length!=11){
      //   this.$toast("手机号码格式错误");
      // }
      this.axios
        .post("/login", {
          code: "",
          key: this.sendkey,
          phone: this.account,
          type: "login",
        })
        .then((res) => {
          if(res.status==200){
            this.$toast.success(res.msg);
          }else{
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
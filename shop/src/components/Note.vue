<template>
  <!-- 手机登录 -->
  <div class="note">
    <van-form @submit="onSubmit">
      <van-field
        v-model="account"
        name="account"
        label="账号"
        placeholder="账号"
        :trigger="onSubmit"
        :rules="[
          { required: true, message: '请输入账号', trigger: 'onSubmit' },
          { validator, message: '账号错误', trigger: 'onSubmit' },
        ]"
      />

      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :trigger="onSubmit"
        :rules="[
          { required: true, message: '请输入密码', trigger: 'onSubmit' },
          { validators, message: '密码错误', trigger: 'onSubmit' },
        ]"
        class="note_word"
      />

      <div style="margin: 40px 14px">
        <van-button block type="info" native-type="submit" class="phone_sub"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>


<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      account: "",
      password: "",
    };
  },
  methods: {
    ...mapMutations(["saveToken"]),
    onSubmit(values) {
        console.log("submit", values);
      this.axios.post("/login", values).then((res) => {
        if (res.status == 400) {
          this.$toast("登陆失败");
        } else {
          // console.log(res.data.token);
          this.saveToken(res.data.token);
          this.$toast("登陆成功");
          let t = setTimeout(() => {
            clearTimeout(t);
            this.$router.back();
          }, 2000);
        }
      });
    },
    validator(val) {
      return /1\d{10}/.test(val);
    },
    validators(val) {
      return /\d{6}/.test(val);
    },
  },
};
</script>

<style lang="less">
.note {
  .note_word {
    position: relative;
    margin-top: 20px;
  }
  .phone_sub {
    background-color: #2c3167;
  }
  .van-field__label {
      width: 50px;
      text-align: center;
  }
}
.van-toast {
    top: 65%;
    height: 30px;
  }
</style>
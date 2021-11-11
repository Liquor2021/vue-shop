<template>
  <!-- 登陆界面 -->
  <div class="login">
    <div class="login_top">
      <img src="../assets/img/right.svg" class="login_left" @click="$router.push('/home')"/>
      <img src="../assets/img/name1.svg" class="login_name" />
    </div>
    <h2 class="login_nav">
        <b @click="fast" :class="{'log_active':zhu=='phone'}">快捷登录 </b>
         | 
        <span @click="submit" :class="{'log_active':zhu=='note'}"> 密码登录</span>
    </h2>
    <component :is="zhu"></component>
  </div>
</template>

<script>
import phone from '../components/Phone.vue'
import note from '../components/Note.vue'
export default {
  data() {
    return {
      active: 0,
      zhu:'phone',
    };
  },
  methods:{
      fast(){
          this.zhu = 'phone';
      },
      submit(){
          this.zhu = 'note';
      },
  },
  components:{
      phone,
      note,
  }
};
</script>

<style lang="less" scoped>
.login {
    padding: 20px;
}
.login_top {
  height: 60px;
  display: flex;
  justify-content: space-between;
  .login_left {
    cursor: pointer;
    display: block;
    width: 24px;
    height: 24px;
    transform: rotate(180deg) translateY(-20px);
  }
  .login_name {
    display: block;
    width: 108px;
    height: 60px;
    margin-right: 30px;
    // margin: 0 auto;
  }
}

.login_nav {
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 16px;
    padding-left: 16px;
    b {
        cursor: pointer;
        margin-right: 15px;
        color: rgb(134, 134, 134);
    }
    span {
        cursor: pointer;
        margin-left: 15px;
        color: rgb(134, 134, 134);
    }
    .log_active {
        color: #000;
    }
}
</style>
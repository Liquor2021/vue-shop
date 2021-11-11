<template>
  <!-- 会员特权说明 -->
  <div class="member" v-if="!show">
    <h1 class="member_h1">会员特权说明</h1>
    <div class="member_box">
        <h2 class="member_h2">
            <img src="../assets/img/member/a1.png" class="member_vip">
            <span>等级V1</span>
            <b>注册会员</b>
        </h2>
        <img src="../assets/img/member/b4.png" >
    </div>
    <div class="member_box">
        <h2 class="member_h2">
            <img src="../assets/img/member/a2.png" class="member_vip">
            <span>等级V2</span>
            <b>1000 成长值</b>
        </h2>
        <img src="../assets/img/member/b5.png" >
    </div>
    <div class="member_box">
        <h2 class="member_h2">
            <img src="../assets/img/member/a3.png" class="member_vip">
            <span>等级V3</span>
            <b>10000 成长值</b>
        </h2>
        <img src="../assets/img/member/b6.png" >
    </div>
    <div class="member_box">
        <h2 class="member_h2">
            <img src="../assets/img/member/a4.png" class="member_vip">
            <span>等级V4</span>
            <b>18888 成长值</b>
        </h2>
        <img src="../assets/img/member/b7.png" >
    </div>

  </div>
</template>

<script>
export default {
    props:["show"],
}
</script>


<style lang="less" scoped>
.member {
    padding-bottom: 20px;
}
.member_h1 {
    padding: 0px 12px;
    margin-top: 15px;
    font-size: 16px;
    color: #2c3167;
    height: 21px;
}
.member_box {
    margin-top: 15px;
    border-top: 1px solid rgb(230, 230, 230);
    position: relative;
    padding: 10px;
    padding-top: 20px;
    // box-sizing: border-box;
    font-size: 14px;
    .member_h2{
        display: flex;
        .member_vip {
            display: inline-block;
            width: 22px;
            height: 22px;
            margin-right: 10px;
            transform: translateY(-8px);
        }
        span {
            flex: 1;
        }
        b {
            font-size: 12px;
        }
    }
    img {
        display: block;
        width: 100%;
    }
}
</style>
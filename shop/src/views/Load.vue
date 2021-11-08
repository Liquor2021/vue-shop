<template>
  <div class="load" ref="load">
    <canvas ref="circleCavans" width="375" height="5"></canvas>
    <img src="../assets/img/name1.svg" />
    <p>权威官网 | 汇聚精品</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: 375, //画布宽度
      cxt: null, //存储canvas画布
      time: 0,
    };
  },
  mounted() {
    this.$refs.circleCavans.width = window.innerWidth;
    this.width = window.innerWidth;
    this.cxt = this.$refs.circleCavans.getContext("2d"); //获取canvas画布上下文
    this.drawTime();
  },
  methods: {
    drawTime() {
      let s = setInterval(() => {
        this.time = this.time + 0.002;
        if (this.time >= 1) {
          clearInterval(s);
          this.$router.push("/home");
        }
        this.drawCircle();
      }, 10);
    },
    drawCircle() {
      this.cxt.clearRect(0, 0, this.width, 10); //清除绘制区域
      this.cxt.beginPath();
      this.cxt.moveTo(0, 0);
      this.cxt.lineTo(this.width, 0);
      this.cxt.strokeStyle = "#ccc";
      this.cxt.lineWidth = 5;
      this.cxt.stroke();
      this.cxt.closePath();
      let rdu = this.width * this.time; //当前长度/总时长
      this.cxt.beginPath();
      this.cxt.strokeStyle = "#2c3167";
      this.cxt.lineWidth = 5;
      this.cxt.moveTo(0, 0);
      this.cxt.lineTo(rdu, 0);
      this.cxt.stroke();
      this.cxt.closePath();
    },
  },
  created() {},
};
</script>

<style lang="less" scoped>
.load {
  width: 100vw;
  height: 100vh;
  position: relative;
  canvas {
    display: block;
  }
  img {
    position: absolute;
    bottom: 70px;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    width: 140px;
  }
  p {
    position: absolute;
    bottom: 40px;
    // left: 50%;
    // transform: translateX(-50%);
    width: 100%;
    text-align: center;
    font-size: 16px;
    color: #2c3167;
  }
}
</style>
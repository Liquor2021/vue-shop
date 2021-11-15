<template>
  <!-- 收货地址 -->
  <div class="address">
    <back :title="name"></back>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import back from "../components/Back.vue";
// import { Toast } from "vant";
export default {
  data() {
    return {
      name: "收货地址",
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true,
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号",
          isDefault: false,
        },
      ],
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号",
          isDefault: false,
        },
      ],
    };
  },
  components: {
    back,
  },
  methods: {
    // get() {
    //   this.axios
    //     .get("/address/list?page=1&limit=20", {
    //       headers: {
    //         "Authori-zation": "Bearer " + this.token,
    //       },
    //     })
    //     .then((res) => {
    //         console.log(res);
    //       for (let i = 0; i < res.length; i++) {
              
    //         this.list[i].id = res.data[i].id;
    //         this.list[i].name = res.data[i].real_name;
    //         this.list[i].tel = res.data[i].phone;
    //       }
    //     });
    // },
    onAdd() {
      //   Toast("新增地址");
      this.$router.push({ path: "/editaddress1" });
    },
    onEdit(item, index) {
      //   Toast("编辑地址:" + index);
      this.$router.push({
        path: "/editaddress",
        query: { arr: this.list[index] },
      });
    },
  },
  created() {
    // this.get();
  },
  computed: {
    ...mapState(["token"]),
  },
};
</script>


<style lang="less">
.address {
  background-color: #f6f6f6;
  min-height: 100vh;
}
</style>
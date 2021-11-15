<template>
  <div class="edit_address">
      <back :title="name"></back>
    <van-address-edit
      :area-list="areaList"
      show-delete
      show-set-default
      show-search-result
      :address-info="address"
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
import { areaList } from '@vant/area-data';
import back from '../components/Back.vue';
export default {
  data() {
    return {
      areaList,
      name:'地址管理',
      searchResult: [],
      address:{
          id:this.$route.query.arr.id,
          name:this.$route.query.arr.name,
          tel:this.$route.query.arr.tel,
          addressDetail:this.$route.query.arr.address,
      },
    };
  },
  methods: {
    onSave() {
      Toast("save");
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
  components:{
      back,
  }
};
</script>
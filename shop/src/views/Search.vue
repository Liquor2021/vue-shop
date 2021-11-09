<template>
  <!-- 搜索页面 -->
  <div class="search">
      <back :title=name></back>
  </div>
</template>

<script>
import back from '../components/Back.vue'
export default {
  data(){
    return {
      name:'Search'
    }
  },
  components:{
    back,
  }
}
</script>
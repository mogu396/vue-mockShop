<template>
  <div class="HomeSwiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        v-for="(item, index) in swiper"
        :key="index"
        class="swipe-item"
        @click="toDetail"
      >
          <img :src="item.imgPath" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props:{
    swiper:{
      type:Array,
      // 类型是对象或者数组时，默认值必须是个函数 回去学组件通信吧
      default(){
        return []
      }
    }
  },
  name: "HomeSwiper",
  methods:{
    toDetail(){
      this.$router.push('/detail')
    }
  }
};
</script>

<style scoped>
.my-swipe {
  display: flex;
  width: 100%;
}

.swipe-item img {
  width: 100%;
}
</style>
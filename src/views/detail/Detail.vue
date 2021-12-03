<template>
  <div class="detail">
   <nav-bar class="detail-nav-bar">
      <template v-slot:left>
        <img src="~assets/img/common/back.svg" alt="" class="nav-left" @click="routerBack">
      </template>
      <template v-slot:center>
        <div class="nav-center">商品</div>
      </template>
    </nav-bar>
    <!-- 轮播图 -->
    <div class="detailSwiper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item
          v-for="(item, index) in detailInfo.swiper"
          :key="index"
          class="swipe-item"
        >
          <img :src="item.imgPath" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <item-select :panelInfo="panelInfo" :content='content'></item-select>
    <!-- title -->
    <detail-tab-bar></detail-tab-bar>
  </div>
</template>

<script>
import { getDetailInfo } from "plugins/detail";
import ItemSelect from "components/content/detail/ItemSelect";
import NavBar from '../../components/common/navbar/NavBar.vue';
import DetailTabBar from '../../components/content/detail/DetailTabBar.vue';
export default {
  name: "Detail",
  components: {
    ItemSelect,
    NavBar,
    DetailTabBar
  },
  data() {
    return {
      detailInfo: [],
      panelInfo:{},
      content:[]
    };
  },
  methods:{
    routerBack(){
      this.$router.go(-1)
    }
  },
  created() {
    getDetailInfo().then((res) => {
      console.log(res.data);
      this.detailInfo = res.data;
      this.panelInfo=res.data.panelInfo
      this.content=res.data.contentImgSrc

      // 存进vuex
      this.$store.commit('SAVE_DETAIL_INFO',this.detailInfo)
    });
  },
};
</script>

<style lang="scss" scoped>
.detail {
  position: relative;
  width: 100%;
  // padding-bottom: 14vw;
}

.my-swipe {
  display: flex;
  width: 100%;
}

.swipe-item img {
  width: 100%;
}
.detail-nav-bar {
  position: relative;
  background-color: var(--color-tint);
  color: #fff;
  .nav-left{
  position: absolute;
  top: 10px;
  left: 10px;
  width: 20px;
}
}
</style>

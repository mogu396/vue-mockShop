<template>
  <div class="home">
    <nav-bar class="home-nav">
      <template #center>
        <span>首页</span>
      </template>
    </nav-bar>
    <home-swiper :swiper="swiper"></home-swiper>
    <recommend-view :recommend="recommend"></recommend-view>
    <home-item-container :shopItem="shopItemTemp"></home-item-container>
    <!-- 组件想要使用原生点击事件，需要加native修饰符 -->
    <back-to-top
      v-show="showbtn"
      @click.native="backToTop"
      ref="btt"
    ></back-to-top>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import { getHomeInfo } from "plugins/home.js";
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import BackToTop from "components/content/backToTop/BackToTop.vue/";
import MainTabBar from "components/content/mainTabBar/MainTabBar";
import HomeItemContainer from "./childComps/HomeItemContainer.vue";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    BackToTop,
    MainTabBar,
    HomeItemContainer,
  },
  data() {
    return {
      showbtn: false,
      swiper: [],
      recommend: [],
      shopItem: [],
      shopItemTemp: [],
      start: 0,
      end: 8,
    };
  },
  methods: {
    backToTop() {
      document.documentElement.scrollTop = 0;
    },
    scrollEventFn() {
      let scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      this.showbtn = scrollTop >= 300 ? true : false;
      // console.log(scrollTop);
    },
    scrollToEnd() {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      //变量clientHeight是可视区的高度
      let clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      let scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      // console.log(scrollHeight, clientHeight + scrollTop);
      //滚动条到底部的条件

      // 会有一些偏差，不知道为什么，要加1才能确保if成立，这里为了保险加5
      if (clientHeight + scrollTop + 5 >= scrollHeight) {
        //写后台加载数据的函数
        // console.log("end");
        this.start + 8;
        this.end + 8;
        setTimeout(() => {
          this.shopItemTemp = this.shopItem.splice(this.start, this.end);
        }, 100);
      }
    },
  },
  created() {
    // axios.get('api/home/multidata').then(res=>{
    //   console.log(res.data);
    // })
    getHomeInfo().then((res) => {
      this.swiper = res.data.swiper;
      this.recommend = res.data.recommend;
      this.shopItem = res.data.shopItem;
      this.shopItemTemp = res.data.shopItem.splice(this.start, this.end);
    });
  },
  mounted() {
    window.addEventListener("scroll", this.scrollEventFn);
    window.addEventListener("scroll", this.scrollToEnd);
  },

  beforeDestroy() {
    removeEventListener("scroll", this.scrollEventFn);
    removeEventListener("scroll", this.scrollToEnd);
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  padding-top: 43px;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 99;
}
</style>

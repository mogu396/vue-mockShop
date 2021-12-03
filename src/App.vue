<template>
  <div id="app">
    <keep-alive include="Home,Category">
      <router-view></router-view>
    </keep-alive>

    <!-- <main-tab-bar :class="{ hide: hideTabBar === true }"></main-tab-bar> -->
  </div>
</template>


<script>
// import { throttle } from "./util/util.js";
// import MainTabBar from "components/content/mainTabBar/MainTabBar";
export default {
  name: "App",
  components: {
    // MainTabBar,
  },
  data() {
    return {
      hideTabBar: false,
    };
  },
  // methods: {
  //   hideTabBarFunc() {
  //     const start = window.pageYOffset;
  //     setTimeout(() => {
  //       const end = window.pageYOffset;
  //       // console.log(start, end, start - end);
  //       if (end - start > 0) {
  //         this.hideTabBar = true;
  //       } else if (end - start < 0) {
  //         this.hideTabBar = false;
  //       }
  //     }, 150);
  //   },
  // },
  mounted() {
    // document.addEventListener("scroll", throttle(this.hideTabBarFunc, 150));
  },
};
</script>
<style>
@import "assets/css/base.css";
#app {
  width: 100%;
  height: 100%;
}
/* .hide {
  height: 0px;
  transition: all 4s linear;
} */
</style>

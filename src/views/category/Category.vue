<template>
  <div class="category-wrapper">
    <nav-bar class="category-nav-bar">
      <template v-slot:left>
        <img src="~assets/img/common/back.svg" alt="" class="nav-left" @click="routerBack">
      </template>
      <template v-slot:center>
        <div class="nav-center">分类</div>
      </template>
    </nav-bar>
    <div class="category-view">
      <cate-aside :categoryList="categoryList"></cate-aside>
      <router-view :categoryList="categoryList" ></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import CateAside from "components/content/category/CateAside.vue";

// axios
import { getCategoryInfo } from "plugins/category";
export default {
  name: "Category",
  components: {
    NavBar,
    CateAside,
  },
  data() {
    return {
      categoryList: [],
    };
  },
  created() {
    // 首页的滑动会影响到分类的高度 ，进来的时候让scrollTop定到顶部
    document.documentElement.scrollTop = 0;

    // 获取数据
    getCategoryInfo().then((res) => {
      this.categoryList = res.data.categoryList;
    });
  },
  methods:{
    routerBack(){
      this.$router.replace('/home')
      console.log(this.$route);
    }
  }
};
</script>

<style lang="scss">
.category-nav-bar {
  position: relative;
  background-color: var(--color-tint);
  color: #fff;

}

.category-view {
  width: 100vw;
  height: 100vh;
  display: flex;
  padding-bottom: 4px;
}

.nav-left{
  position: absolute;
  top: 10px;
  left: 10px;
  width: 20px;
}
</style>

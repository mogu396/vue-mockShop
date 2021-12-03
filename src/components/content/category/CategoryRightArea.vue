<template>
  <ul class="cate-right-area-wrapper" v-if="shopItemArr">
    <li class="cate-aside-item" v-for="item in shopItemArr.list" :key="item.id">
      <router-link :to="{ path: `/detail` }">
        <img :src="item.imgPath" alt="" />
        <div class="title">{{ item.title }}</div>
      </router-link>
    </li>
    <!-- <li
         v-for="(k,i) in shopItemArr.list"
         :key='i'
      >
        <router-link :to="{path:'/detail'}">
          <img :src="k.imgPath"><span>{{k.title}}</span>
        </router-link>
      </li> -->
  </ul>
</template>

<script>
export default {
  name: "CategoryRightArea",
  props: {
    categoryList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    // 从vuex中拿index，以此拿到对应的数据
    shopItemArr() {
      return (
        this.categoryList[this.$store.state.category.tabIndex] || this.categoryList[0]
      );
    },
  },
  mounted(){
    // this.
  }
};
</script>

<style lang='scss' scoped>
.cate-right-area-wrapper {
  flex: 1;
  margin-top: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  overflow-y: auto;

  .cate-aside-item {
    width: 42%;
    align-self: center;
  }
  & .cate-aside-item img {
    width: 100%;
  }
}
</style>
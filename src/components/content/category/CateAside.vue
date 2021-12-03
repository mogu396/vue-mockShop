<template>
  <ul class="cate-aside-item-wrapper">
    <li
      class="cate-aside-item"
      v-for="(asideItem, index) in categoryList"
      :key="asideItem.id"
      @click="sendTabIndex(index)"
      :class="{ active: index == tabIndex }"
    >
      <router-link :to="{ path: `/category/${asideItem.title}` }">
        {{ asideItem.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "CateAside",
  props: {
    categoryList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    ...mapState({tabIndex:state=>state.category.tabIndex})

  },
  methods: {
    sendTabIndex(index) {
      // 通过tab的index值拿到对应的数据
      // console.log(index);
      // console.log(this.categoryList[index]);
      // 拿到index存到vuex
      this.$store.commit("CHANGE_TAB", index);
    },
  },
  mounted() {
    // this.$router.push(`/cagegory/${this.categoryList[0]}`)
  },
};
</script>

<style lang='scss' scoped>
.cate-aside-item-wrapper {
  // flex: 2.2;
  overflow-y: auto;
  text-align: center;
  width: 60px;
  height: 100%;
  background-color: #f6f6f6;
  flex-direction: column;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
  .cate-aside-item {
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    line-height: 70px;
  }
  .active {
    position: relative;
    &::before {
      width: 3px;
      height: 28px;
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      margin-top: -14px;
      background-color: var(--color-tint);
    }
  }
}
</style>
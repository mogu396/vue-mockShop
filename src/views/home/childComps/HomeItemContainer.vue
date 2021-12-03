<template>
  <div class="home-item-wrapper">
    <div class="talk">为 你 推 荐</div>
    <div class="home-item-container">
      <div
        v-for="item in itemArr"
        :key="item.id"
        class="home-item"
        @click="toDetail"
      >
        <img :src="item.imgPath" alt="" />
        <div class="title">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeItem",
  props: {
    shopItem: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      itemArr: this.shopItem,
    };
  },
  methods: {
    toDetail() {
      console.log(this.$router);
      this.$router.push("/detail");
    },
  },
  watch: {
    shopItem: {
      immediate: true,
      handler(newVal) {
        this.itemArr.push(...newVal);
      },
    },
  },
};
</script>

<style lang='scss' scoped>
.home-item-wrapper {
  width: 100%;
}
.talk {
  text-align: center;
  width: 100px;
  margin: 5px auto;
  font-size: 16px;
  font-weight: 700;
}
.home-item-container {
  // width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  // overflow: hidden;
}
.home-item-container::after {
  content: "";
  height: 49px;
  width: 100%;
  display: block;
}

.home-item {
  width: 45%;
  display: columns;
  justify-content: center;
  margin-bottom: 5px;
  & > img {
    width: 100%;
  }
}
</style>
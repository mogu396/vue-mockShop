<template>
  <div class="shop-tab-bar">
    <div class="left">
      <i class="iconfont icon-Category" @click="routerToCategory"></i>
    </div>
    <div class="center">
      <i class="iconfont icon-money1">({{ cartListCash }})</i>
    </div>
    <div class="right">结算</div>
  </div>
</template>

<script>
export default {
  name: "shopTabBar",
  methods: {
    routerToCategory() {
      this.$router.push("/category");
    },
  },
  computed: {
    // 这里先执行了getters,返回undefined，去修改一下cartList里的数据
    cartListCash() {
      // console.log(this.$store.getters.getCartListCash);
      return this.$store.getters.getCartListCash
    },
  },
};
</script>

<style lang='scss' scoped>
.shop-tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.15);
  z-index: 9;
  width: 100%;
  height: 49px;
  line-height: 49px;
  .left,
  .right,
  .center {
    flex: 1;
    text-align: center;
    color: #333;
  }
  .left {
    background-color: #f6f6f6;
    & > i {
      font-size: 20px;
    }
  }
  .center {
    position: relative;
    background-color: #f6f6f6;
    & > i {
      font-size: 20px;
    }
    .shop-cart-count {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--color-tint);
      border-radius: 50%;
      position: absolute;
      top: 5px;
      right: 15px;
      z-index: 999;
      height: 15px;
      width: 15px;
      font-size: 12px;
      color: #fff;
    }
  }
  .right {
    flex: 2;
    color: #f6f6f6;
    background-color: var(--color-tint);
  }
}
</style>

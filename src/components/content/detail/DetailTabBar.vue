<template>
  <div class="tab-bar">
    <div class="left" @click="routerBack">
      <i class="iconfont icon-home1"></i>
    </div>
    <div class="center" @click="routerToShopCart">
      <i class="iconfont icon-shop"></i>
      <div v-if="shopCartCount" class="shop-cart-count">
        {{ shopCartCount }}
      </div>
    </div>
    <div class="right" @click="addItemToShopCart">加入购物车</div>
  </div>
</template>

<script>
export default {
  name: "DetailTabBar",
  methods: {
    routerBack() {
      this.$router.push("/home");
    },
    routerToShopCart() {
      this.$router.push("/shopcart");
    },
    addItemToShopCart() {
      const panelSelected = {
        title: this.panelInfo.title,
        price: this.panelInfo.price,
        size: this.panelInfo.choose[this.sizeSelected].size,
        color: this.panelInfo.choose[this.colorSelected].color,
        id: this.panelInfo.id,
        imgPath: this.$store.state.detail.detailInfo.swiper[0].imgPath,
        isClick:false
      };
      // console.log(this.$store.state.detail.colorSelected);
      // console.log(this.panelInfo.choose[this.colorSelected].color);
      // console.log(this.$store.state.detail.sizeSelected);
      // console.log(this.panelInfo.choose[this.sizeSelected].size);
      // this.$store.commit("CHANGE_CART_COUNT", 1);
      this.$store.commit('ADD_ITEM_TO_CARTLIST',panelSelected)
      // console.log(panelSelected.id);
      // console.log(panelSelected.title);

      this.$toast.show('success',1500)
    },
  },
  computed: {
    // 因为异步请求以及父子声明周期的原因，需要先在computed获得vuex中的值
    shopCartCount() {
      return this.$store.state.shopCart.count
    },
    colorSelected() {
      return this.$store.state.detail.colorSelected;
    },
    sizeSelected() {
      return this.$store.state.detail.sizeSelected;
    },
    panelInfo() {
      return this.$store.state.detail.detailInfo.panelInfo;
    },
  },
};
</script>

<style lang='scss' scoped>
.tab-bar {
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
      height: 20px;
      width: 20px;
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

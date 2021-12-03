<template>
  <div class="cart">
    <nav-bar class="cart-nav-bar">
      <template v-slot:left>
        <img
          src="~assets/img/common/back.svg"
          alt=""
          class="nav-left"
          @click="routerBack"
        />
      </template>
      <template v-slot:center>
        <div class="nav-center">购物车</div>
      </template>
    </nav-bar>
    <shop-cart-item :cartList="cartList"></shop-cart-item>
    <shop-tab-bar></shop-tab-bar>
  </div>
</template>

<script>
import { mapState } from "vuex";

import NavBar from "components/common/navbar/NavBar";
import ShopCartItem from "components/content/shopCart/ShopCartItem";
import ShopTabBar from "../../components/content/shopCart/ShopTabBar.vue";
export default {
  name: "ShopCart",
  components: {
    NavBar,
    ShopTabBar,
    ShopCartItem,
  },
  methods: {
    routerBack() {
      this.$router.go(-1);
      // 由于路由守卫无法监听后退事件，所以这里也放一个
      this.$store.commit("SET_CASH");
    },
  },
  computed: {
    ...mapState({ cartList: (state) => state.shopCart.cartList }),
  },
  beforeRouteLeave (to, from, next) {
    this.$store.commit('SET_ISCLICK_FALSE')
    next()
  }
};
</script>

<style lang='scss' scoped>
.cart-nav-bar {
  position: relative;
  background-color: var(--color-tint);
  color: #fff;
  .nav-left {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 20px;
  }
}
.cart {
  position: relative;
  width: 100%;
  padding-bottom: 14vw;
}
</style>

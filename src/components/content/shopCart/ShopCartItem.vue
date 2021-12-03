<template>
  <div class="shop-cart-item-wrapper">
    <div class="shop-cart-item" v-for="(item, index) in cartList" :key="index">
      <div class="left-area">
        <choose-icon
          class="choose-icon"
          :itemIndex="index"
          @chosen="chosen"
        ></choose-icon>
        <img :src="item.imgPath" alt="" />
      </div>
      <div class="right-area">
        <div class="title">{{ item.title }}</div>
        <div class="price">{{ item.price }}元</div>
        <div class="item-size-and-color">
          <div class="color">{{ item.color }}</div>
          <span class="divide">-</span>
          <div class="size">{{ item.size }}</div>
        </div>
        <div class="control-btn">
          <span class="add" @click="addItemCount(item, index)">
            <i class="iconfont icon-zengjia"></i>
          </span>
          <span class="sub" @click="subItemCount(item, index)">
            <i class="iconfont icon-jianshao"></i>
          </span>
          <span class="delete">
            <!-- <i class="iconfont icon-lajitong"></i> -->
            x {{ item.itemCount }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ChooseIcon from "./ChooseIcon.vue";
export default {
  name: "ShopCartItem",
  data() {
    return {
      show: false,
    };
  },
  components: {
    ChooseIcon,
  },
  computed: {
    ...mapState({ cartList: (state) => state.shopCart.cartList }),
  },
  methods: {
    addItemCount(item) {
      this.$store.commit("ADD_ITEM_COUNT", item);
    },
    subItemCount(item) {
      this.$store.commit("SUB_ITEM_COUNT", item);
    },
    chosen(isClick, itemIndex) {
      // mutation不能传多个参数
      this.$store.commit("SET_CHOSEN", { itemIndex, isClick });
      if (isClick === true) {
        const cash =
          this.cartList[itemIndex].price * this.cartList[itemIndex].itemCount;
        this.$store.commit("ADD_CASH", cash);
      } else {
        const cash =
          this.cartList[itemIndex].price * this.cartList[itemIndex].itemCount;
        this.$store.commit("SUB_CASH", cash);
      }
    },
  },
  mounted() {
    // this.
  },
};
</script>

<style lang='scss' scoped>
.shop-cart-item-wrapper {
  margin-top: 1px;
  width: 100%;
  display: flex;
  flex-direction: column;
  .shop-cart-item {
    display: flex;
    width: 100%;
    height: 15vh;
    align-items: center;
    border-bottom: 5px solid rgba(185, 185, 185, 0.14);
    .left-area {
      height: 100px;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      .choose-icon {
        text-align: center;
        line-height: 100px;
        width: 40px;
        flex: none;
      }
      img {
        width: 90px;
        padding-right: 5px;
      }
    }
    .right-area {
      position: relative;
      display: flex;
      height: 90px;
      width: 100px;
      overflow: hidden;
      flex-direction: column;
      flex: 2;
      .title {
        width: 100%;
        align-self: flex-start;
        word-break: break-all;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 14px;
      }
      .price {
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 80px;
        color: darksalmon;
      }
      .item-size-and-color {
        margin-top: 10px;
        display: flex;
        .divide {
          padding: 0 5px;
        }
        .size,
        .color {
        }
      }
      .control-btn {
        position: absolute;
        bottom: 0px;
        right: 0;
        .add,
        .sub,
        .delete {
          padding: 0 2vw;
        }
      }
      .control-btn:last-child {
        padding-right: 0;
      }
    }
  }
}
</style>
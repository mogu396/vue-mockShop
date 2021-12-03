<template>
  <div class="item-select-wrapper">
    <!-- 信息面板 -->
    <div class="panel-info">
      <div class="title">
        {{ panelInfo.title }}
      </div>
      <!-- <span>{{ view.price }}元</span> -->
      <div class="panel-info-intro">{{ panelInfo.intro }}</div>
      <div class="price">{{ panelInfo.price }}元</div>
    </div>
    <!-- 选择面板 -->
    <div class="choose-panel">
      <div class="choose-color-wrapper">
        <div
          :class="{ 'choose-color':true, 'active': colorSelected === index }"
          v-for="(item, index) in panelInfo.choose"
          :key="item.index"
          @click="chooseColor(index)"
        >
          {{ item.color }}
        </div>
      </div>

      <div class="choose-size-wrapper">
        <div
          :class="{ 'choose-color': true, active: sizeSelected === index }"
          v-for="(item, index) in panelInfo.choose"
          :key="item.index"
          @click="chooseSize(index)"
        >
          {{ item.size }}
        </div>
      </div>
    </div>
    <!-- 详情图 -->
    <div class="detail-img">
      <div class="img-wrap" v-for="(item, index) in content" :key="index">
        <img :src="item.imgPath" />
      </div>
    </div>
    <div class="router-back"></div>
  </div>
</template>

<script>
export default {
  name: "ItemSelect",
  props: {
    panelInfo: {
      type: Object,
      default() {
        return {};
      },
    },
    content: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    chooseColor(index) {
      this.$store.commit("CHANGE_COLOR_INDEX", index);
    },
    chooseSize(index) {
      this.$store.commit("CHANGE_SIZE_INDEX", index);
    },
  },
  computed: {
    colorSelected() {
      // 获取vuex中选中的index
      return this.$store.state.detail.colorSelected;
    },
    sizeSelected() {
      // 获取vuex中选中的index
      return this.$store.state.detail.sizeSelected;
    },
  },
};
</script>

<style lang='scss' scoped>
.item-select-wrapper {
  width: 100%;
  height: 150px;
  .panel-info {
    padding: 10px;
  }
  .panel-info-intro {
    font-size: 14px;
    font-weight: 200;
    padding-top: 10px;
  }
  .price {
    font-weight: 700;
    color: darksalmon;
    float: right;
  }
  .choose-panel {
    display: flex;
    flex-direction: column;
  }
  .choose-size-wrapper,
  .choose-color-wrapper {
    display: flex;
    text-align: center;
    .active {
      background-color: var(--color-tint);
      color: #fff;
    }
  }

  .choose-size-wrapper {
    margin-top: -1px;
  }

  .choose-size,
  .choose-color {
    // border: 1px solid rgb(111, 111, 111);
    // color: rgb(111, 111, 111);
    // padding: 6px 10px;
    // margin-right: 6vw;
    border: 1px solid rgb(111, 111, 111);
    padding: 5px 5px;
    margin: 5px 10px;
    margin-top: 10px;
    color: rgb(111, 111, 111);
  }

  .detail-img {
    width: 100%;
    border-top: 20px solid #f8fcff;
    .img-wrap {
      height: 100vw;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
<template>
  <div class="choose-icon" @click="chooseItem">
    <i
      class="iconfont"
      :class="[isClick ? 'icon-yigouxuan' : 'icon-weigouxuan']"
    ></i>
  </div>
</template>

<script>
export default {
  name: "ChooseIcon",
  props: ["itemIndex"],
  data() {
    return {
      isClick: false,
    };
  },
  methods: {
    chooseItem() {
      this.isClick = !this.isClick;
      this.$emit('chosen',this.isClick,this.itemIndex)
    },
  },
  beforeRouteEnter(to, from, next) {
    this.$store.commit("SET_CASH");
    next();
  },
  // 无法监听浏览器后退
  // beforeRouteLeave (to, from, next) {
  //   this.$store.commit('SET_CASH')
  //   next()
  // }
};
</script>

<style lang='scss' scoped>
</style>
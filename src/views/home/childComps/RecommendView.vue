<template>
  <div class="recommend">
    <div
      v-for="item in recommend"
      :key="item.id"
      class="recommend-item"
      @click="toDetail"
    >
      <img :src="item.imgPath" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommend: {
      Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    toDetail() {
      console.log(this.$router);
      this.$router.push("/detail");
    },
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  white-space: nowrap;
  text-align: center;
  overflow-y: hidden;
  overflow-x: scroll;
  font-size: 12px;
  border-top: 10px solid #eee;
  border-bottom: 10px solid #eee;
}

.recommend-item {
  display: flex;
  height: 10vh;
  align-items: center;
  padding: 0 5px;
}

.recommend-item img {
  width: 20vh;
  vertical-align: middle;
}
</style>

<template>
  <transition name="test">
    <div class="toast" v-show="isShow">
      <div>{{ message }}</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "",
      isShow: false,
    };
  },
  methods: {
    show(message, duration = 2000) {
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
      }, duration);
    },
  },
};
</script>

<style lang='scss' scoped>
.toast {
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.7);
}

.test-enter-active,
.test-leave-active {
  transition: opacity 0.5s;
}
.test-enter,
.test-leave-to {
  opacity: 0;
}
</style>
<template>
  <div class="back-to-top">
    <img src="@/assets/img/common/top.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackToTop",
  methods:{
  }
};
</script>

<style>
.back-to-top {
  position: fixed;
  right: 25px;
  bottom: 70px;
}
.back-to-top img{
  width: 40px;
}
</style>
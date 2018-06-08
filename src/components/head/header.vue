<template>
	<div class="header flex space-between" v-if="showHeader">
		<div class="head-ico flex align-items-center" @click="goback">
			<slot name="left"></slot>
		</div>
		<div class="head-title flex align-items-center">
			<slot name="title"></slot>
		</div>
		<div class="user head-ico flex align-items-center content-end">
			<slot name="right"></slot>
		</div>
	</div>
</template>
<script>
export default {
  data() {
    return {
      showHeader: true
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang='less' scoped>
.header {
  width: 100%;
  height:100px;
  line-height:100px;
  position: fixed;
  top: 0;
  z-index: 10;
  background: #0b9d78;
  .title {
    font-size: 0.768rem;
    color: #fff;
  }
  .head-ico {
    i {
      padding: 0 0.64rem;
      color: #fff;
      display: block;
      font-size: 1.2rem;
    }
  }
  .user {
    line-height: 100px;
    i {
      padding: 0 0.64rem;

      color: #fff;
    }
    img {
      padding: 0.64rem;
      width: 30px;
      flex: 0 0 0.5rem;
      display: block;
    }
  }
  .head-title {
    font-size: 1.02rem;
    line-height: 100px;
    line-height: 100px;
    color: #fff;
    margin-left:-1rem;
  }
}
</style>
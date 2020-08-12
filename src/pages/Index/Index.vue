<template>
  <div class="index-wrapper">
    <img alt="vant" :src="require('@assets/logo.png')">
    <h5 class="iw-title">{{msg}}</h5>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">次要按钮</van-button>
  </div>
</template>
<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'This is a vant app'
    }
  }
}
</script>
<style lang="less" scoped>
.iw-title{
  color: @017959;
}
</style>

<template>
  <div class="index-wrapper">
    <img class="iw-logo" :src="require('@assets/images/logo.png')" alt="vant" >
    <h5 class="iw-title">{{msg}}</h5>
    <div>
      <van-button type="default">默认按钮</van-button>
    </div>
  </div>
</template>
<script>
import { Button } from 'vant'
export default {
  name: 'HelloWorld',
  components: {
    [Button.name]: Button
  },
  data () {
    return {
      msg: 'This is a vant app practise',
    }
  },
  methods: {
    
  }
}
</script>
<style lang="less" scoped>
// .iw-logo{}
.iw-title{
  color: @017959;
  font-size: 14px;
  margin-bottom: 10px;
}
</style>

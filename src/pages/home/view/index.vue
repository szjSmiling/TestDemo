<!--
 * @Author: sunzhongjie
 * @Date: 2020-11-04 16:58:47
 * @LastEditors: Jelly
 * @LastEditTime: 2020-12-30 17:21:53
-->
<template>
  <div class="container">
    <img class="iw-logo" :src="require('@assets/images/logo.png')" alt="vant" >
    <div class="">
      <van-button type="default" url="/404">404</van-button>
      <van-button type="default" url="/scroll">scroll</van-button>
      <van-button type="default" @click="clickEvent">防抖节流</van-button>
    </div>
  </div>
</template>
<script>
import { Button } from 'vant';
import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';
export default {
  name: 'HelloWorld',
  components: {
    [Button.name]: Button
  },
  data () {
    return {
      throttle,
      msg: 'This is a vant app practise',
    }
  },
  methods: {
    clickEvent: debounce(function() {
      console.log(11)
    }, 2000, { leading: true, trailing: false })
  }
}
</script>
<style lang="less" scoped>
*{text-align: center;}
.iw-logo{
  opacity: 0.5;
}
</style>
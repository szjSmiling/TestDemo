<!--
 * @Author: sunzhongjie
 * @Date: 2020-11-04 16:58:47
 * @LastEditors: Jelly
 * @LastEditTime: 2021-01-20 14:54:38
-->
<template>
  <div class="container">
    <img class="iw-logo" :src="require('@assets/images/logo.png')" alt="vant" >
    <div class="">
      <div id="my-signin2" alt="谷歌自动生成登录按钮"></div>
      <van-button type="default" url="/404">404</van-button>
      <van-button type="default" url="/scroll">scroll</van-button>
      <van-button type="default" @click="clickEvent">防抖节流</van-button><br>
      <van-button id="signin-google-button">google sign in</van-button>
      <van-button id="signin-fb-button">facebook sign in</van-button>
      <van-button id="signin-apple-button">apple sign in</van-button>
    </div>
  </div>
</template>
<script>
import { Button } from 'vant';
import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';
import { signinWithGoogle } from '@/tools/signin-with-google.js';
import { signinWithFacebook } from '@/tools/signin-with-facebook.js';
import { signinWithApple } from '@/tools/signin-with-apple.js';

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
  mounted() {
    /**
     * signinWithGoogle(1, 'signin-google-button'), 手动点击 google 登录
     * signinWithFacebook('signin-fb-button'), 加载facebook登陆的sdk, 初始化执行环境, 通过id绑定事件
     * signinWithApple('signin-apple-button'), 手动点击 apple 登录
     */
    signinWithGoogle(1, 'signin-google-button'); 
    signinWithFacebook('signin-fb-button');
    signinWithApple('signin-apple-button');                      
  },
  methods: {
    clickEvent: debounce(function() {
      console.log(11)
    }, 2000, { leading: true, trailing: false }),
  }
}
</script>
<style lang="less" scoped>
*{text-align: center;}
.iw-logo{
  opacity: 0.5;
}
</style>
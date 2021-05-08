<!--
 * @Author: sunzhongjie
 * @Date: 2020-11-04 16:58:47
 * @LastEditors: Jelly
 * @LastEditTime: 2021-04-12 10:14:45
-->
<template>
  <div class="container">
    <button class="backTop" v-show="backTop">Top</button>
    <div class="content clear">
      <h4>基础组件</h4>
      <van-button
        type="default"
        v-for="page of pageEntries"
        :key="page.id"
        :url="page.path">{{page.name}}
      </van-button>
    </div>
    <div class="content clear">
      <h4>加载组件</h4>
      <van-button type="default" url="/loading">加载</van-button>
    </div>
    <div class="content clear">
      <h4>表单组件</h4>
      <van-button type="default" url="/form">表单</van-button>
    </div>
    <div class="content clear">
      <h4>DataCanvas组件</h4>
      <van-button type="default" url="/canvas">canvas</van-button>
    </div>
    <div class="content clear">
      <h4>功能组件</h4>
      <van-button type="default" url="/function">功能入口</van-button>
      <van-button type="default" @click="clickEvent">防抖节流</van-button>
    </div>
    <div class="content clear">
      <h4>错误组件</h4>
      <van-button type="warning" url="404">404</van-button>
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
      backTop: false,
      pageEntries: [
        { id: 0, path: '/webp', name: 'Webp' },
        { id: 1, path: '/slot', name: 'Slot' },
        { id: 2, path: '/scroll', name: 'Scroll' },
        { id: 3, path: '/third-auth', name: 'Third-auth' },
      ]
    }
  },
  created() {
    window.addEventListener('scroll', this.scrollHandler)
  },
  methods: {
    scrollHandler(e) {
      let scrollTop = e.target.scrollingElement.scrollTop
      let clientHeight = e.target.scrollingElement.clientHeight
      if(scrollTop >= clientHeight + 30) {
        this.backTop = true;
      } else {
        this.backTop = false;
      }
    },
    clickEvent: debounce(function() {
      console.log('debounce')
    }, 2000, { leading: true, trailing: false }),
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollHandler)
  }
}
</script>
<style lang="less" scoped>
.content{
  margin-top: 10px;
  padding-bottom: 10px;
  padding-left: 16px;
  padding-right: 16px;
  border-bottom: 1px solid #ddd;
  h4{
    font-size: 16px;
  }
  .van-button{
    margin-top: 10px;
    float: left;
    width: 25%;
    height: 1rem;
    line-height: 1rem;
    font-size: 13px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    // .van-button__text{}
  }
}
.backTop{
  position: fixed;
  bottom: 120px;
  right: 20px;
  font-size: 16px;
  opacity: 0.5;
}
</style>
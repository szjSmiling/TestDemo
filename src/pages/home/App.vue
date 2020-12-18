<!--
 * @Author: sunzhongjie
 * @Date: 2020-11-04 16:58:47
 * @LastEditors: Jelly
 * @LastEditTime: 2020-12-18 17:51:21
-->
<template>
  <transition name="fade">
    <div id="app" v-if="showPage">
      <szj-header :title="'header'" />
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
      <szj-footer :title="'scroll-title'" />
    </div>
  </transition>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      showPage: false
    }
  },
  created () {
    const timer = setTimeout(() => {
      this.showPage = true;
      clearTimeout(timer)
    }, 10);
  }
}
</script>
<style lang="less">
@import '~@assets/css/common.css';
@import '~@assets/css/animation.css';
@import '~@assets/css/custom.less';
</style>

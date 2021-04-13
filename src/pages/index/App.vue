<!--
 * @Author: sunzhongjie
 * @Date: 2020-11-04 16:58:47
 * @LastEditors: Jelly
 * @LastEditTime: 2021-04-09 16:32:21
-->
<template>
  <transition name="fade">
    <div id="app" v-if="showPage">
      <szj-header :showBackHome="false" />
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
      <szj-footer />
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
    this._SDelay(() => {
      this.showPage = true;
    }, 1)
  }
}
</script>
<style lang="less">
@import '~@assets/css/common.css';
@import '~@assets/css/animation.css';
@import '~@assets/css/custom.less';
</style>

<!--
 * @Author: sunzhongjie
 * @Date: 2020-11-04 16:58:47
 * @LastEditors: Jelly
 * @LastEditTime: 2021-03-09 09:56:26
-->
<template>
  <transition name="fade">
    <div id="app" v-if="showPage">
      <szj-header :title="'auth-header'" />
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
      <szj-footer :title="'auth-footer'" />
    </div>
  </transition>
</template>
<script>
export default {
  name: 'third-auth',
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

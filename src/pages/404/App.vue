<!--
 * @Author: sunzhongjie
 * @Date: 2020-12-11 11:07:10
 * @LastEditors: Jelly
 * @LastEditTime: 2021-01-20 13:49:31
-->
<template>
  <transition name="fade">
    <div id="app" v-if="showPage">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
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

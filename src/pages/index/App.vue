<template>
  <div id="app" data-name="home">
    <transition name="fade">
      <router-view v-if="showPage"></router-view>
    </transition>
  </div>
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
    }, 10)
  }
}
</script>
<style lang="less">
@import '~@assets/css/common.css';
@import '~@assets/css/animation.css';
@import '~@assets/css/custom.less';

html, body, #app { width: 100%;height: 100%;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  scrollbar-width: none;
  scrollbar-color: transparent;
  &scrollbar{display: none;}
}
</style>

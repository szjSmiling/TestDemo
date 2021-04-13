<!--
 * @Author: sunzhongjie
 * @Date: 2020-11-04 16:58:47
 * @LastEditors: Jelly
 * @LastEditTime: 2021-04-09 16:39:00
-->
<template>
  <header class="header">
    <div class="content">
      <div class="left" @click="leftHandler">
        <i class="iconfont back"></i>
        <slot name="left"></slot>
      </div>
      <div class="center ellipsis">
        {{title}}
        <slot name="center"></slot>
      </div>
      <div class="right" @click="rightHandler">
        <i class="iconfont home" v-if="showBackHome"></i>
        <slot name="right"></slot>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  props: {
    title: {
      type: [String, Object],
      default: 'SzjSmiling'
    },
    showBackHome: {
      type: Boolean,
      default: true
    },
    leftCustom: {
      default: null
    },
    rightCustom: {
      default: null
    }
  },
  data() {
    return {
      leftHandler: Function,
      rightHandler: Function
    }
  },
  created() {
    this.leftHandler = this.leftCustom || this.goBack
    this.rightHandler = this.rightCustom || this.goHome
  },
  methods: {
    goBack () {
      history.go(-1);
    },
    goHome () {
      location.href = "/"
    }
  }
}
</script>
<style lang="less" scoped>
.content{
  height: 60px;
}
.left, .right{
  padding: 0 16px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.left{
  left: 0;
  .back{
    font-size: 28px;
  }
}
.right{
  right: 0;
  .home{
    font-size: 24px;
    color: #1989fa;
  }
}
.center{
  max-width: calc(100% - 140px);
  margin: auto;
  line-height: 60px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
}
</style>
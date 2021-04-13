<!--
 * @Author: sunzhongjie
 * @Date: 2021-03-19 11:10:44
 * @LastEditors: Jelly
 * @LastEditTime: 2021-03-19 13:51:29
-->
<template lang="html">
  <div class="normal-slot">
    <slot>我是默认内容</slot>
    <slot name="scoped" :text="text">我是作用域插槽默认内容1</slot>
  </div>
</template>
<script>
export default {
  props: {
    fromParent: {
      type: String,
      default: 'from parent'
    }
  },
  data() {
    return {
      text: 'from child slot'
    }
  }
}
</script>
<style lang="less" scoped>
.normal-slot{
  min-height: 100px;
  border: 1px solid #ddd;
}
</style>
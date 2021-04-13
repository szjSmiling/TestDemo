<!--
 * @Author: sunzhongjie
 * @Date: 2021-03-19 11:10:44
 * @LastEditors: Jelly
 * @LastEditTime: 2021-03-19 13:50:25
-->
<template lang="html">
  <div class="normal-slot">
    <p>{{fromParent}}</p>
    <slot>我是普通默认插槽内容0</slot>
  </div>
</template>
<script>
export default {
  props: {
    fromParent: {
      type: String,
      default: 'from parent'
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
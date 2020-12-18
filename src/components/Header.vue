<!--
 * @Author: sunzhongjie
 * @Date: 2020-11-04 16:58:47
 * @LastEditors: Jelly
 * @LastEditTime: 2020-12-18 17:44:22
-->
<template>
  <header>
    {{title}}
  </header>
</template>
<script>
export default {
  props: {
    title: {
      type: [String, Object],
      default: ''
    }
  }
}
</script>
<style lang="less" scoped>

</style>
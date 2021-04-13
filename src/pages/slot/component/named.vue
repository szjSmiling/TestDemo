<!--
 * @Author: sunzhongjie
 * @Date: 2021-03-19 11:10:44
 * @LastEditors: Jelly
 * @LastEditTime: 2021-03-19 13:47:31
-->
<template lang="html">
  <div class="normal-slot">
    <p>{{fromParent}}</p>
    <slot>我是默认内容0<br></slot>
    <slot name="namedSimple" :text="text">我是具名插槽默认内容1<br></slot>
    <slot name="namedSimple2" :text="text">我是具名插槽默认内容2<br></slot>
    <slot name="named" :text="text">我是具名插槽默认内容3<br></slot>
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
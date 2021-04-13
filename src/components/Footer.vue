<!--
 * @Author: sunzhongjie
 * @Date: 2020-12-18 17:37:49
 * @LastEditors: Jelly
 * @LastEditTime: 2021-04-09 15:02:19
-->
<template>
  <footer class="footer">
    <div class="content">
      <p class="icp">豫ICP备18009561号</p>
      <p class="emoi">😄😃😉😘😚😳😁😌😒😜😝😏😓😔😖😥😰😊😨😣😢😭😂😱😠😪😷😟😇😋😧😦😯😵😛😶😎😅</p>
    </div>
    <slot></slot>
  </footer>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'footer'
    }
  }
}
</script>
<style lang="less" scoped>
.content{
  padding: 6px 16px;
  height: 100%;
}
.icp{
  font-size: 12px;
  text-align: center;
}
.emoi{
  text-align: center;
}
</style>